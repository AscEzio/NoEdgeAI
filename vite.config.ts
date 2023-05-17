import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    },
    resolve: {
      alias: [
        {
          find: /^~/,
          replacement: "",
        },
        { find: '@', replacement: path.resolve(__dirname, 'src') },
      ],
    },
  });
};
