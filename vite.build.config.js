import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-page-title",
            entry: "ilw-page-title.js",
            fileName: "ilw-page-title",
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-page-title.css";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
