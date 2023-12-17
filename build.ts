/**
 * esbuild_deno_loader@0.8.2 with esbuild@v0.19.7+ results in an error such as:
 * 

Type 'import("https://deno.land/x/esbuild@v0.19.2/mod").Plugin[]' is not assignable to type 'import("https://deno.land/x/esbuild@v0.19.7/mod").Plugin[]'.
  Type 'import("https://deno.land/x/esbuild@v0.19.2/mod").Plugin' is not assignable to type 'import("https://deno.land/x/esbuild@v0.19.7/mod").Plugin'.
    Types of property 'setup' are incompatible.
      Type '(build: import("https://deno.land/x/esbuild@v0.19.2/mod").PluginBuild) => void | Promise<void>' is not assignable to type '(build: import("https://deno.land/x/esbuild@v0.19.7/mod").PluginBuild) => void | Promise<void>'.
        Types of parameters 'build' and 'build' are incompatible.
          Type 'import("https://deno.land/x/esbuild@v0.19.7/mod").PluginBuild' is not assignable to type 'import("https://deno.land/x/esbuild@v0.19.2/mod").PluginBuild'.
            The types of 'initialOptions.plugins' are incompatible between these types.
              Type 'import("https://deno.land/x/esbuild@v0.19.7/mod").Plugin[] | undefined' is not assignable to type 'import("https://deno.land/x/esbuild@v0.19.2/mod").Plugin[] | undefined'.
                Type 'import("https://deno.land/x/esbuild@v0.19.7/mod").Plugin[]' is not assignable to type 'import("https://deno.land/x/esbuild@v0.19.2/mod").Plugin[]'.
                  Type 'import("https://deno.land/x/esbuild@v0.19.7/mod").Plugin' is not assignable to type 'import("https://deno.land/x/esbuild@v0.19.2/mod").Plugin'.
                    Types of property 'setup' are incompatible.
                      Type '(build: import("https://deno.land/x/esbuild@v0.19.7/mod").PluginBuild) => void | Promise<void>' is not assignable to type '(build: import("https://deno.land/x/esbuild@v0.19.2/mod").PluginBuild) => void | Promise<void>'.
                        Types of parameters 'build' and 'build' are incompatible.
                          Type 'import("https://deno.land/x/esbuild@v0.19.2/mod").PluginBuild' is not assignable to type 'import("https://deno.land/x/esbuild@v0.19.7/mod").PluginBuild'.
                            Types of property 'onLoad' are incompatible.
                              Type '(options: import("https://deno.land/x/esbuild@v0.19.2/mod").OnLoadOptions, callback: (args: import("https://deno.land/x/esbuild@v0.19.2/mod").OnLoadArgs) => import("https://deno.land/x/esbuild@v0.19.2/mod").OnLoadResult | Promise<...> | null | undefined) => void' is not assignable to type '(options: import("https://deno.land/x/esbuild@v0.19.7/mod").OnLoadOptions, callback: (args: import("https://deno.land/x/esbuild@v0.19.7/mod").OnLoadArgs) => import("https://deno.land/x/esbuild@v0.19.7/mod").OnLoadResult | Promise<...> | null | undefined) => void'.
                                Types of parameters 'callback' and 'callback' are incompatible.
                                  Types of parameters 'args' and 'args' are incompatible.
                                    Property 'with' is missing in type 'import("https://deno.land/x/esbuild@v0.19.2/mod").OnLoadArgs' but required in type 'import("https://deno.land/x/esbuild@v0.19.7/mod").OnLoadArgs'.deno-ts(2322)
mod.d.ts(428, 3): 'with' is declared here.
mod.d.ts(166, 3): The expected type comes from property 'plugins' which is declared here on type 'SameShape<BuildOptions, BuildOptions>'
(property) BuildOptions.plugins?: esbuild.Plugin[] | undefined
Documentation: https://esbuild.github.io/plugins/

 * pinning to v0.19.6 for now.
 */
import * as esbuild from "https://deno.land/x/esbuild@v0.19.6/mod.js";
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.8.2/mod.ts";

await esbuild.build({
    plugins: [...denoPlugins()],
    entryPoints: ["./www/index.tsx"],
    outfile: "./www/dist/main.js",
    bundle: true,
    format: "esm",
});

esbuild.stop();