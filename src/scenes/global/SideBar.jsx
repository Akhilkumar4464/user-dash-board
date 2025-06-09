import { useState} from 'react'
import {proSideBar , Menu, MenuItem}  from 'react-pro-sidebar'
import ' react-pro-sidebar/dist/css/react-pro-sidebar.css'
import { Box ,IconButton , Typography, useTheme } from '@mui/material';
import {Link} from 'react-router-dom'
import {tokens} from '../../Theme'
import HomeOutlined  from '@mui/icons-material/HomeOutlined';
import  PersonOutlined  from '@mui/icons-material/PersonOutlined';
import PeopleOutlined  from '@mui/icons-material/PeopleOutlined';
import ContactOutlined  from '@mui/icons-material/ContactOutlined';
import ReceiptOutlined  from '@mui/icons-material/ReceiptOutlined';
import CalenderTodayOutlined  from '@mui/icons-material/CalenderTodayOutlined';
import HelpOutlined  from '@mui/icons-material/HelpOutlined';
import BarChartOutlined  from '@mui/icons-material/BarChartOutlined';
import  PieOutlined  from '@mui/icons-material/PieOutlined';
import TimelineOutlined  from '@mui/icons-material/TimelineOutlined';
import  MenuOutlined  from '@mui/icons-material/MenuOutlined';
import  MapOutlined  from '@mui/icons-material/MapOutlined';






function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [iscollapsed, setIsCollapsed] = useState(false);
  const [ selected, setSelected] = useState("Dashboard")
  return (
     
    <Box>

      </Box>
  )
}

export default SideBar
