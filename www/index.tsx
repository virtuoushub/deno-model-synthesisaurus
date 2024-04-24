import React from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import App from "./App.tsx";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
