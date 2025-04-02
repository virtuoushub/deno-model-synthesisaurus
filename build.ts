import * as esbuild from "https://deno.land/x/esbuild@v0.23.1/mod.js";
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.9.0/mod.ts";

await esbuild.build({
    plugins: [...denoPlugins()],
    entryPoints: ["./www/index.tsx"],
    outfile: "./www/dist/main.js",
    bundle: true,
    format: "esm",
});

esbuild.stop();