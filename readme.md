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

On Linux, make sure the native GTK/GLib development packages are installed. This project needs `libglib2.0-dev` for the `glib-sys` crate when building Tauri.

For Debian/Ubuntu environments, install the Tauri prerequisites:

```sh
sudo apt-get update
sudo apt-get install -y \
  pkg-config build-essential curl wget file \
  libglib2.0-dev libgtk-3-dev libwebkit2gtk-4.1-dev \
  libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev
```

---

```sh
cargo install tauri-cli
```

Development:
```shell
cargo tauri dev
```

If you are in a headless Linux environment (CI/dev container/SSH) and see
`Failed to initialize GTK`, there is no GUI display backend available.

Use one of these options:

```sh
# Run with a virtual X server
xvfb-run -a cargo tauri dev
```

```sh
# Or forward your host display into the container/session
export DISPLAY=:0
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
deno bench > "./bench/deno_bench_$(date +'%s').log" --allow-sys=hostname
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

`libwebkit2gtk-4.1-dev `

https://github.com/tauri-apps/tauri/issues/9662

---

https://v2.tauri.app/start/prerequisites/#linux

```sh
sudo apt update
sudo apt install libwebkit2gtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  libxdo-dev \
  libssl-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev
```

---

`deno.json`

```
"$HOME/.cache/esbuild/bin",
```

---

`"beforeBuildCommand": "env -u LD_LIBRARY_PATH deno run -P=build --lock --frozen=true build.ts",`