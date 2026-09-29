const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const builtExe = path.join(projectRoot, 'release', 'AuraDesk.exe');
const rootExe = path.join(projectRoot, 'AuraDesk.exe');

if (!fs.existsSync(builtExe)) {
  throw new Error(`Portable executable was not created: ${builtExe}`);
}

fs.copyFileSync(builtExe, rootExe);
console.log(`Portable AuraDesk executable copied to ${rootExe}`);
