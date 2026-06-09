#!/bin/bash
# Exit on any error
set -e

echo "====================================================="
echo "🚀 Starting Optimized Deployment (1GB RAM / 1 vCPU / 20GB Disk)"
echo "====================================================="

# 1. Check/Enable Swap Space
# 1GB RAM is not enough for building Vite and NestJS concurrently.
# We need at least 2GB of swap space to prevent Out Of Memory (OOM) crashes.
if [ -f /etc/debian_version ] || [ -f /etc/redhat-release ] || [ -f /etc/system-release ]; then
  SWAP_EXISTS=$(swapon --show | wc -l)
  if [ "$SWAP_EXISTS" -eq 0 ]; then
    echo "⚠️ No swap space detected. Attempting to create 2GB swap file to prevent OOM crash..."
    if [ "$EUID" -ne 0 ]; then
      echo "👉 Running with sudo to create swapfile..."
      sudo dd if=/dev/zero of=/swapfile bs=1M count=2048
      sudo chmod 600 /swapfile
      sudo mkswap /swapfile
      sudo swapon /swapfile
      echo "/swapfile swap swap defaults 0 0" | sudo tee -a /etc/fstab
      echo "✅ Created 2GB swap space!"
    else
      dd if=/dev/zero of=/swapfile bs=1M count=2048
      chmod 600 /swapfile
      mkswap /swapfile
      swapon /swapfile
      echo "/swapfile swap swap defaults 0 0" >> /etc/fstab
      echo "✅ Created 2GB swap space!"
    fi
  else
    echo "✅ Swap space detected (active)."
  fi
fi

# 2. Aggressive Disk Space Cleanup BEFORE Build
# 20GB disk fills up very quickly with docker build caches and old images.
echo "🧹 Cleaning up unused Docker resources, caches, and volumes to free up disk space..."
docker system prune -af --volumes

# 3. Sequential Building (Crucial for 1GB RAM)
# Running 'docker compose build' builds services in parallel, which will OOM.
# We build them one by one.
echo "🏗️ Building server container (Stage 1)..."
docker compose build server

echo "🏗️ Building client container (Stage 2)..."
docker compose build client

echo "🏗️ Building nginx reverse proxy container (Stage 3)..."
docker compose build nginx

# 4. Start the services
echo "▶️ Starting all services in detached mode..."
docker compose up -d

# 5. Post-deployment cleanup
# Clean up any build caches generated during the compilation
echo "🧹 Performing post-build cleanup..."
docker builder prune -f
docker image prune -f

echo "====================================================="
echo "🎉 Optimized Deployment Completed Successfully!"
echo "====================================================="
exit 0
