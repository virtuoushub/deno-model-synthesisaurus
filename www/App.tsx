import React, { useEffect, useState } from "react";
import { ask } from "@tauri-apps/plugin-dialog";
import { tw } from "twind";

export default function App() {
  const [state, setState] = useState("Click the button!");

  useEffect(() => {
    /** https://esbuild.github.io/api/#live-reload */
    const liveReload = new EventSource("/esbuild");
    liveReload.addEventListener("change", () => location.reload());
    return () => {
      liveReload.close();
    };
  }, []);

  function askUser() {
    ask("Are you ok? :)", "Hey!").then((res: boolean) => {
      if (res) {
        setState("You are good!");
      } else {
        setState("You are not good D:");
      }
    });
  }

  return (
    <div className={tw`mx-10 my-5 `}>
      <h1 className={tw`text-xl`}>{state}</h1>
      <button
        type='button'
        className={tw`my-2 px-3 py-2 rounded-lg bg-gray-900 text-white transition duration-150 ease-in-out`}
        onClick={askUser}
      >
        Click me :)
      </button>
    </div>
  );
}
