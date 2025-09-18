import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "ilw-page-title",
            entry: "ilw-page-title.ts",
            fileName: "ilw-page-title",
            formats: ["es"],
        },
        rollupOptions: {
            output: {
                assetFileNames: () => {
                    return "[name][extname]";
                }
            },
        },
    },
    server: {
        hmr: false,
    },
});
