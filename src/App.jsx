import { colortheme, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";

import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
 import { useState } from "react";

function App() {
    const [isSidebar, setIsSidebar] = useState(true);
  const [, colorMode, theme] = useMode();

  return (
    <colortheme.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar  isSidebar={isSidebar}  />
          <main className="content">
            <TopBar  setIsSidebar={setIsSidebar}/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colortheme.Provider>
  );
}

export default App;
