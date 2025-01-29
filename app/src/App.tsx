import Home from './pages/Home.tsx'
import './App.css'
import * as React from "react";

// 1. import `HeroUIProvider` component
import {HeroUIProvider} from "@heroui/react";

function App() {
  // 2. Wrap HeroUIProvider at the root of your app
  return (
    <HeroUIProvider>
      <Home />
    </HeroUIProvider>
  );
}

export default App
