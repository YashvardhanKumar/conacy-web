# Conacy: A Privacy-Focused Social Media Platform

Conacy is a social media platform designed to prioritize user privacy. The platform offers a unique level of control over profile visibility, allowing users to customize who can access their personal information.

---

## 🛠️ Prerequisites & Installation (For New PCs)

If you are setting up this project on a brand new PC, follow these steps to install the required tools:

### 1. Install Git & Bun
* **macOS:**
  ```bash
  # Install Homebrew (if not installed)
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # Install Git & Bun
  brew install git
  curl -fsSL https://bun.sh/install | bash
  ```
* **Windows (via PowerShell):**
  * Install Git: Download from [git-scm.com](https://git-scm.com/)
  * Install Bun:
    ```powershell
    powershell -c "irm bun.sh/install.ps1 | iex"
    ```
* **Linux:**
  ```bash
  sudo apt update && sudo apt install -y git curl unzip
  curl -fsSL https://bun.sh/install | bash
  ```

### 2. Install Docker & Docker Compose
* **macOS (Lightweight CLI Option using Colima - Recommended):**
  We recommend using **Colima** instead of Docker Desktop on macOS as it is lightweight, faster, and open-source.
  ```bash
  # Install Colima, Docker CLI, and Docker Compose
  brew install colima docker docker-compose

  # Start Colima container engine
  colima start
  ```
* **Windows / Linux:**
  * **Windows:** Install [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/).
  * **Linux:** Follow the official guide to install [Docker Engine](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/).

---

## 🚀 Local Setup & Configuration

### 1. Configure Environment Variables
Copy the template environment file in the repository root to create your active configuration:
```bash
cp .env.example .env
```
Open `.env` and fill in your keys:
* Configure your Neo4j password (e.g. `NEO4J_PASSWORD`).
* Add your Cloudinary credentials (`CLOUDINARY_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`).
* Add your authentication cryptographic RSA keypairs (`PRIVATE_KEY`, `PUBLIC_KEY`).

### 2. Run in Local Development Mode
To run locally with live hot-reloading and source code syncing:
1. Open `.env` and **uncomment** the development overrides block at the bottom:
   ```env
   NODE_ENV=development
   SERVER_BUILD_TARGET=development
   CLIENT_BUILD_TARGET=development
   SERVER_VOLUME=./server
   CLIENT_VOLUME=./client
   SERVER_NODE_MODULES=/app/node_modules
   CLIENT_NODE_MODULES=/app/node_modules
   ```
2. Build and start the development containers:
   ```bash
   docker compose up --build
   ```
3. Access points:
   * **Web Application:** [http://localhost](http://localhost) (proxied through Nginx)
   * **GraphQL Engine:** [http://localhost/graphql](http://localhost/graphql)
   * **Neo4j Browser:** [http://localhost:7474](http://localhost:7474) (Credentials: user `neo4j` / your password)

---

## 🔍 Code Quality & Automated Git Hooks

This repository has a built-in automated **pre-commit hook** to ensure only compiling, tested, and linted code gets committed.

### 1. Activate Git Hooks
To activate the hook in your local clone, run this command once:
```bash
git config core.hooksPath .githooks
```

### 2. How the Hook Works
When you run `git commit`, the hook:
* Finds only the files you have staged (`git add`).
* Typechecks the TypeScript build if client files are staged.
* Runs tests inside the modified modules (`Vitest` for client, `Jest` for server).
* Runs `eslint` only on the modified files.
* Aborts the commit if any checks or tests fail.

### 3. Run Tests Manually
If you want to run your tests manually without committing:
* **Client App Unit Tests:**
  ```bash
  cd client && bun run test
  ```
* **Server App Unit Tests:**
  ```bash
  cd server && bun run test
  ```

---

## 🌐 Production Deployment (EC2)

The repository is configured for production by default. 

### 1. Security Lockdowns
In production:
* Only port `80` (Nginx Gateway) is exposed to the public internet.
* Database ports (Neo4j on `7474`/`7687` and Redis on `6379`) and app container ports (`3000`/`3001`) are bound to loopback `127.0.0.1` and are inaccessible from the outside.

### 2. Configure Production Environment
Make sure the development overrides block in `.env` is **commented out** (which is the default). 
Configure your public domain or public IP:
```env
CLIENT_URL=http://your-ec2-ip-or-domain.com
```

### 3. CI/CD Deployment Trigger
The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles CD.
1. Run quality tests on every Push and Pull Request.
2. **Deployment only happens when you publish a new Release in GitHub.**
3. Add these repository secrets under **Settings ➔ Secrets and variables ➔ Actions**:
   * `EC2_HOST`: EC2 instance public IP/domain.
   * `EC2_USER`: SSH login user (e.g. `ubuntu`).
   * `EC2_SSH_KEY`: Private key (`.pem` file content).
   * `EC2_DEPLOY_DIR`: (Optional) Deployment folder path on server (defaults to `~/conacy-web`).

### 4. Low-resource Optimization (`scripts/deploy.sh`)
When a release is triggered, the deployment script executes optimizations designed for **1GB RAM, 1 vCPU, 20GB Disk** instances (like AWS `t2.micro`):
* Automatically provisions a **2GB swapfile** to prevent compilers from crashing the server with Out of Memory (OOM) errors.
* Runs aggressive docker pruning *before* building to keep storage within 20GB.
* Temporarily stops services (`docker compose down`) to free up memory for the build.
* Performs sequential container builds (`server` ➔ `client` ➔ `nginx`) instead of concurrent builds to minimize peak RAM load.

---

## 🎨 Technical Stack
* **Frontend:** React, Vite, Tailwind CSS, Apollo Client
* **Backend:** NestJS, GraphQL, Apollo Server
* **Database:** Neo4j (Graph Database), Redis (Caching)
* **Reverse Proxy:** Nginx

---

## 📸 Screenshots

### Desktop
![Screenshot 1](https://github.com/user-attachments/assets/ebee3b59-7bc3-4925-a059-80b889470b6e)
![Screenshot 2](https://github.com/user-attachments/assets/6ba2bbd6-66d6-4042-a2cd-ccb5e8d8fe2a)

### Mobile
![WhatsApp Image 1](https://github.com/user-attachments/assets/9cb565aa-f611-41b1-92f2-f27670885549)
![WhatsApp Image 2](https://github.com/user-attachments/assets/a7baf3c7-3bfa-43d7-b1e8-b26751a41cb9)
