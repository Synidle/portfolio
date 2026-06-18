import {defineConfig} from "vite";

export default defineConfig({
    base: "https://synidle.github.io/portfolio/",
    build: {
        outDir: "docs",
        emptyOutDir: true,
    }
});