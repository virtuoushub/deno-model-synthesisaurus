import * as esbuild from "esbuild";
import { denoPlugins } from "esbuild_deno_loader/mod.ts";

const denoConfig = JSON.parse(
  await Deno.readTextFile(new URL("./deno.json", import.meta.url)),
);

const importMapURL = `data:application/importmap+json,${
  encodeURIComponent(JSON.stringify({
    imports: denoConfig.imports ?? {},
    scopes: denoConfig.scopes ?? {},
  }))
}`;

await esbuild.build({
  plugins: [...denoPlugins({ importMapURL })],
  entryPoints: ["./www/index.tsx"],
  outfile: "./www/dist/main.js",
  bundle: true,
  format: "esm",
});

esbuild.stop();
