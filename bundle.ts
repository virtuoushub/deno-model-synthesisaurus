import * as esbuild from "https://deno.land/x/esbuild@v0.19.6/mod.js";
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.8.2/mod.ts";

const ctx = await esbuild.context({
  plugins: [...denoPlugins()],
  entryPoints: ["./www/index.tsx"],
  outfile: "./www/dist/main.js",
  bundle: true,
  format: "esm",
});

await ctx.watch()

await ctx.serve({
  port: 3000,
  servedir: "./www",
});
