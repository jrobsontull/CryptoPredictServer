import fs from 'fs';

// Async check file exists
const asyncExists = (path: string): Promise<boolean> => {
  return fs.promises
    .access(path, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
};

// Sync check file exists
const syncExists = (path: string): boolean => {
  return fs.existsSync(path);
};

export { asyncExists, syncExists };
