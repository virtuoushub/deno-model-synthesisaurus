import React, { useEffect, useState } from "react";
import { tw } from "twind";

export default function App() {
  const [state, setState] = useState("Click the button!");

  const isTauriRuntime =
    typeof window !== "undefined" &&
    typeof (window as { __TAURI_INTERNALS__?: unknown }).__TAURI_INTERNALS__ !==
      "undefined";

  useEffect(() => {
    /** https://esbuild.github.io/api/#live-reload */
    const liveReload = new EventSource("/esbuild");
    liveReload.addEventListener("change", () => location.reload());
    return () => {
      liveReload.close();
    };
  }, []);

  async function askUser() {
    try {
      // Browser builds don't expose Tauri internals, so use a native fallback.
      const res = isTauriRuntime
        ? await (await import("@tauri-apps/plugin-dialog")).ask(
            "Are you ok? :)",
            "Hey!",
          )
        : window.confirm("Are you ok? :)");

      if (res) {
        setState("You are good!");
      } else {
        setState("You are not good D:");
      }
    } catch {
      setState("Dialog unavailable in this runtime.");
    }
  }

  return (
    <div className={tw`mx-10 my-5 `}>
      <h1 className={tw`text-xl`}>{state}</h1>
      <button
        type="button"
        className={tw`my-2 px-3 py-2 rounded-lg bg-gray-900 text-white transition duration-150 ease-in-out`}
        onClick={askUser}
      >
        Click me :)
      </button>
    </div>
  );
}
