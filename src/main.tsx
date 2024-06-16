import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import AnimatedCursor from "react-animated-cursor";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: "#333",
      }}
      outerStyle={{
        border: "3px solid #333",
      }}
    />
    <App />
  </React.StrictMode>
);
