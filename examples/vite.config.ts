import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const envars = loadEnv(env.mode, "./")

  const serverAPIPath = envars.VITE_SERVER_API_PATH ?? "/api/forms"
  const serverURL = new URL(
    envars.VITE_SERVER_URL ?? "<http://localhost:3000>"
  )

  return {
    envDir: './',
    // Make the API path globally available in the client
    define: {
      __API_PATH__: JSON.stringify(serverAPIPath),
    },
    server: {
      port: 8080,
      proxy: {
        // Proxy requests with the API path to the server
        [serverAPIPath]: serverURL.origin,
      },
    },
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@utils": path.resolve(__dirname, "./src/utils"),
      },
    },
  }
})
