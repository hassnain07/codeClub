import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HeaderMain from "./components/header/headerMain";
import HeroMain from "./components/heroSection/HeroMain";
import Helper from "./components/helper";
import CursorDot from "./components/CursorDot";
import Index from "./pages/Index";
function App() {
  return (
    <>
      <main className="font-body">
        <Index></Index>
      </main>
    </>
  );
}

export default App;
