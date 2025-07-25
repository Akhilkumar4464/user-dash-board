import { Box ,Typography } from "@mui/material";
import { DataGrid} from "@mui/x-data-grid";
import { ColorModeContext, tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";

import Header from "../../components/Header";
import { useTheme } from "@mui/material";



const Invoices = () => {
  const theme = useTheme(ColorModeContext);
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
  
    {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell",},
   
    {field: "phone",headerName: "Phone Number",flex: 1, },
    {field: "email",headerName: "Email",flex: 1,},
    { field: "address", headerName: "Address", flex: 1 },
    { field: "cost", headerName: "Cost", flex: 1, 
                renderCell: (params) => (
                  <Typography
                    color={colors.greenAccent[500]}>
                    $ {params.row.cost}
                  </Typography>
                )

     },
    { field: "date", headerName: "Date", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="Invoices" subtitle=" List of Invoices balences" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column-cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          
         
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns}  />
      </Box>
    </Box>
  );
};

export default Invoices;

