import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <Stack
      className="navbar"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        px: { xs: "2em", lg: "5em" },
        py: "1em",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <Link to="/">
        <Box
          sx={{
            width: { xs: "120px", lg: "140px" },
          }}
        >
          <img src={Logo} alt="logo" width="100%" />
        </Box>
      </Link>

      <Stack direction="row" sx={{ gap: { lg: "4em", xs: "2em" } }}>
        <Link to="/" style={{ color: "#ff9945", textDecoration: "none" }}>
          {" "}
          <Typography
            fontWeight="500"
            sx={{ fontSize: { lg: "18px", xs: "16px" } }}
          >
            {" "}
            Home{" "}
          </Typography>{" "}
        </Link>
        <a
          href="#exercises"
          style={{ color: "#c3fcf1", textDecoration: "none" }}
        >
          {" "}
          <Typography
            sx={{ fontSize: { lg: "18px", xs: "16px" } }}
            fontWeight="500"
          >
            {" "}
            Exercises{" "}
          </Typography>{" "}
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
