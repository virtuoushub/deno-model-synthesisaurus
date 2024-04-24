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
