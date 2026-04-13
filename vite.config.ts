import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'character-manifest-generator',
        buildStart() {
          const charsDir = path.resolve(__dirname, 'public/chars');
          if (fs.existsSync(charsDir)) {
            const folders = fs.readdirSync(charsDir)
              .filter(file => fs.statSync(path.join(charsDir, file)).isDirectory());
            fs.writeFileSync(
              path.join(charsDir, 'characters.json'),
              JSON.stringify(folders, null, 2)
            );
          }
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
