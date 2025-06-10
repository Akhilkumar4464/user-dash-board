import { useMode, colortheme } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";

import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
 import Team from "./scenes/team";
{/*import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calender";*/}

function App() {
  const [mode, colorMode, theme] = useMode();

  return (
    <colortheme.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar/>
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              
           <Route path="/team" element={<Team />} />
            { /*<Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/form" element={<Form />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calender" element={<Calendar />} /> */} 
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colortheme.Provider>
  );
}

export default App;
