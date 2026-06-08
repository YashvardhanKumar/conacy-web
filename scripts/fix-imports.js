const fs = require('fs');
const path = require('path');

function walk(dir, filter) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath, filter));
    } else if (filter(filePath)) {
      results.push(filePath);
    }
  });
  return results;
}

function processDirectory(srcDir) {
  const files = walk(srcDir, filePath => filePath.endsWith('.ts') || filePath.endsWith('.tsx'));
  const srcAbsoluteDir = path.resolve(srcDir);

  let updatedCount = 0;

  files.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const dirPath = path.dirname(filePath);

    // Regex to find imports and exports
    // e.g., import ... from "..."
    // import "..."
    // export * from "..."
    const newContent = content.replace(
      /(import|export)\s+(?:[\s\S]*?\s+from\s+)?['"](\..*?)['"]/g,
      (match, type, importPath) => {
        // Resolve absolute path of the import
        const resolvedPath = path.resolve(dirPath, importPath);

        // Check if resolved path is inside src directory
        if (resolvedPath.startsWith(srcAbsoluteDir)) {
          const relPath = path.relative(srcAbsoluteDir, resolvedPath);
          const parts = relPath.split(path.sep);

          // The first part of relPath is the subfolder in src
          // e.g. components, hooks, auth, custom
          if (parts.length > 1) {
            const newImportPath = `@${relPath}`;
            // Replace matching part in the original match
            return match.replace(importPath, newImportPath);
          }
        }
        return match;
      }
    );

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated: ${path.relative(process.cwd(), filePath)}`);
      updatedCount++;
    }
  });

  console.log(`Successfully updated ${updatedCount} files in ${srcDir}`);
}

console.log('Starting absolute import conversion...');
processDirectory('client/src');
processDirectory('server/src');
console.log('Conversion complete!');
