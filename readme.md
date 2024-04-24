# Deno 🦕 + Tauri

Starter template for Tauri, bundling the frontend made with React using Deno with esbuild.

You can use TypeScript or JavaScript. With React or any other library, or just vanilla, with no extra steps.

- `src-tauri`: Rust backend
- `www`: Web frontend
- `build.ts`: Script to build your frontend
- `bundle.ts`: Script to bundle your frontend while developing

Prerequisites:
- [Rust](https://www.rust-lang.org/)
- [Deno](https://deno.land/)
- [Tauri](https://tauri.app/v1/api/cli)
- [Tauri os-specific dependencies](https://tauri.app/v1/guides/getting-started/prerequisites/#installing)

---

```sh
cargo install tauri-cli
```

Development:
```shell
cargo tauri dev
```

Building:
```shell
cargo tauri build
```

Formatting:
```shell
deno fmt www
cargo fmt
```

Linting:
```shell
deno lint www
cargo clippy
```

---

```sh
deno bench > "bench/deno_bench_$(date +'%s').log" --allow-sys=hostname
```

```sh
deno test  --allow-sys=hostname
```

--- 

## gotchas

### `Error failed to bundle project: error running bundle_dmg.sh`

```sh
...
    Finished release [optimized] target(s) in 2m 04s
    Bundling tauri-deno-starter.app (/Users/pc/dev/code/tauri-playground/deno-model-synthesisaurus/src-tauri/target/release/bundle/macos/tauri-deno-starter.app)
    Bundling tauri-deno-starter_0.1.0_x64.dmg (/Users/pc/dev/code/tauri-playground/deno-model-synthesisaurus/src-tauri/target/release/bundle/dmg/tauri-deno-starter_0.1.0_x64.dmg)
     Running bundle_dmg.sh
       Error failed to bundle project: error running bundle_dmg.sh
...
```

> This worked for me on macOS Sonoma:
> 
> Give Terminal.app the permissions to control Finder.app: Go to `System-Settings` -> `Privacy & Security` -> `Automation` There select `Terminal` and below enable the switch `Finder`.

- https://github.com/tauri-apps/tauri/issues/3055#issuecomment-1866022065

---