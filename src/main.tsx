import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import WeeklyPlanContextProvider from "./context/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WeeklyPlanContextProvider>
      <App />
    </WeeklyPlanContextProvider>
  </React.StrictMode>
);
