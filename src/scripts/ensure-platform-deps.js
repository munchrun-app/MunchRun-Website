import { execSync } from 'child_process';
import { platform } from 'os';

try {
  const currentPlatform = platform();
  
  if (currentPlatform === 'darwin') {
    // macOS
    console.log('Installing macOS rollup dependencies...');
    execSync('npm install @rollup/rollup-darwin-x64 --no-save', { stdio: 'inherit' });
  } else if (currentPlatform === 'linux') {
    // Linux
    console.log('Installing Linux rollup dependencies...');
    execSync('npm install @rollup/rollup-linux-x64-gnu @rollup/rollup-linux-x64-musl --no-save', { stdio: 'inherit' });
  } else if (currentPlatform === 'win32') {
    // Windows
    console.log('Installing Windows rollup dependencies...');
    execSync('npm install @rollup/rollup-win32-x64-msvc --no-save', { stdio: 'inherit' });
  }
  
  console.log('Platform-specific dependencies installed successfully.');
} catch (error) {
  console.error('Failed to install platform-specific dependencies:', error);
  process.exit(1);
}