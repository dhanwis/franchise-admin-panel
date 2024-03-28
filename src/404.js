import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowBack";

const Error = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          {/* <img
            alt="Under development"
            src="/error/error-404.png"
            style={{
              maxWidth: "100%",
              width: 400,
            }}
          /> */}
          <Typography variant="h3" mt={3} mb={2}>
            404: The page you are looking for isn’t here
          </Typography>
          <Typography color="text.secondary" variant="body1" mb={3}>
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation.
          </Typography>
          <Link to={"/admin"}>
            <Button
              startIcon={<ArrowLeftIcon />}
              variant="contained"
              color="primary"
            >
              Go back to dashboard
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Error;
