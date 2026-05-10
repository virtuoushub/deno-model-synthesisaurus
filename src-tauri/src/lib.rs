#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    #[cfg(target_os = "linux")]
    {
        // Tauri needs a Linux GUI session (X11 or Wayland). Without it,
        // gtk initialization panics in tao during event loop startup.
        let has_display = std::env::var_os("DISPLAY").is_some()
            || std::env::var_os("WAYLAND_DISPLAY").is_some();

        if !has_display {
            eprintln!(
                "Tauri cannot start: no Linux display backend detected.\n\
Set DISPLAY (X11) or WAYLAND_DISPLAY (Wayland), or run with a virtual display:\n\
  xvfb-run -a cargo tauri dev"
            );
            std::process::exit(1);
        }
    }

    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
