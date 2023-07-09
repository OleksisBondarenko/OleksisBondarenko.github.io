import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import { readdirSync } from 'fs'

const absolutePathAliases: { [key: string]: string } = {};
// Root src folder
const srcPath = path.resolve('./src/');
// Ajust the regex here to include .vue, .js, .jsx, etc.. files from the src/ folder
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map((dirent) => dirent.name.replace(/(\.ts){1}(x?)/, ''));

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = path.join(srcPath, directory);
});

export default defineConfig({
  root: '.',
  resolve: {
    alias: {
      ...absolutePathAliases
    }
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    },
    outDir: "build"
  }
});
