import { defineConfig } from "vite";
import fs from "fs";
import path from "path";

const __dirname = path.resolve();
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "localhost.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "localhost.cert")),
    },

    port: 5173, 
    host: "0.0.0.0", 
  },
});
