import { Box } from "@mui/material";
import Header from "../../components/Header";
import PiChart from "../../components/PiChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PiChart />
      </Box>
    </Box>
  );
};

export default Pie;
