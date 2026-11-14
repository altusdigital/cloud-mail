import { defineWranglerConfig } from "wrangler/experimental-config";

export default defineWranglerConfig({
	build: {
		command: "npx --yes pnpm@11 --prefix ../mail-vue install && npx --yes pnpm@11 --prefix ../mail-vue run build",
	},
	assetsDirectory: "./dist",
});
