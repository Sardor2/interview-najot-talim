import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AllRoutes } from "./routes";

function App() {
  return (
    <div className="min-h-screen w-full">
      <AllRoutes />
    </div>
  );
}

export default App;
