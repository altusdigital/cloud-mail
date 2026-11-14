import { bindings, defineConfig, triggers } from "cf/config";

export default defineConfig({
	worker: {
		name: "cloud-mail",
		compatibilityDate: "2025-06-04",
		entrypoint: "src/index.js",
		workersDev: true,
		observability: {
			enabled: true,
		},
		assets: {
			notFoundHandling: "single-page-application",
			runWorkerFirst: true,
		},
		triggers: [
			triggers.scheduled({
				schedule: "0 * * * *",
			}),
		],
		env: {
			analysis_cache: bindings.json(false),
			orm_log: bindings.json(false),
			domain: bindings.json([
				"altusdigital.dev",
			]),
			admin: bindings.text("admin@altusdigital.dev"),
			db: bindings.d1({
				name: "cloud-mail",
				id: "f5aab9a7-f6b9-4f3a-aa67-5198454abf97",
			}),
			kv: bindings.kv({
				id: "4d189b65325c4cbfa3e0b8429a8dd71f",
			}),
			r2: bindings.r2({
				name: "cloud-mail",
			}),
			forward: bindings.sendEmail({}),
			ai: bindings.ai({}),
			assets: bindings.assets(),
		},
	},
});
