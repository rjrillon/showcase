import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import state from "state";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("min-width: 1000px");
  const { _id, picturePath } = useSelector(state => state.user);

  return (
    <Box>
      <Navbar />
      <Box width="100%"></Box>
    </Box>
  );
};
export default HomePage;
