import { CssBaseline } from "@mui/material";
import React from "react";

import Sidebar from "./componenets/sidebar";
import SidebarRight from "./componenets/sidebarRight";

function App() {
  return (
    <CssBaseline>
      <div className="App">
      <SidebarRight/>
        <Sidebar />
   
      </div>
    </CssBaseline>
  );
}

export default App;
