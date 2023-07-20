import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://mankinchi.github.io/house-inventory-manager",
	plugins: [react(), eslint(), tsconfigPaths()],
});
