import React from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import App from "./App.tsx";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
