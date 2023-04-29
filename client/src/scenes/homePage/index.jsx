import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("min-width: 1000px");
  const { _id, picturePath } = useSelector(state => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 5%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="1rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "30%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>

        <Box
          flexBasis={isNonMobileScreens ? "50%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
        </Box>
        {isNonMobileScreens && <Box flexBasis="30%"></Box>}
      </Box>
    </Box>
  );
};
export default HomePage;
