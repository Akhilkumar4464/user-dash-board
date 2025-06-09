import React from "react";
import { Box, IconButton} from "@mui/material";
 import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { colortheme, tokens } from "../../Theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import PersonOutlined from "@mui/icons-material/PersonOutlined";

import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";

function TopBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(colortheme);
 
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/**Search Bar */}
      <Box
        display="flex"
        borderRadius="3px"
        backgroundColor={colors.primary[700]}
        p={1}
      >
 <InputBase sx ={{ ml:2 ,flex:1 }} placeholder="Search..."/>
 <IconButton type="button" sx={{ p: "1" }}>
   <SearchIcon/>
 </IconButton>
      </Box>
{ /**End of Search Bar */}
     <Box sx={{ display: "flex"  , p:1 }}>
   <IconButton onClick={colorMode.toggleColorMode}>
    {/* Toggle between dark mode and light mode icons based on the current theme */}
    {  theme.palette.mode ==='dark'? (<DarkModeOutlined />) : (<LightModeOutlined />) }
  </IconButton>
      <IconButton >
   <NotificationsOutlined/>
      </IconButton>
       <IconButton >
    <SettingsOutlined/>
      </IconButton>
    
       <IconButton >
   <PersonOutlined/>
      </IconButton>
       <IconButton >
   <SettingsOutlined/>
      </IconButton>
      </Box> 
    </Box>
  );
}

export default TopBar;
