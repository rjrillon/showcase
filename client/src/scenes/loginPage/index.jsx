import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1500px");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 5%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="40px" color="primary">
          showcase
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="700" variant="h6" sx={{ mb: "1rem" }}>
          Welcome to showcase! Share and connect with friends today!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
