import React from 'react'
import { Box , Typography , useTheme} from '@mui/material'
 import { DataGrid } from '@mui/x-data-grid';
 import { tokens } from '../../Theme';
 import { mockDataTeam} from  " ../../Data/mockData"
 import  AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined ';
 import  LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined ';
import  SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined ';
import Header from '../../components/Header';



export default function Team() {
    const theme = useTheme();
    const colors = tokens(colors.pallete.mode)
  return (
    <div>
       hiiii
    </div>
  )
}


