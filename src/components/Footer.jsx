import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box bgcolor="#333">
      <Typography variant="subtitle2" textAlign="center" color="#fff">
        {" "}
        © Copyright Agency and contributors {new Date().getFullYear()} by Satya
        Surendra
      </Typography>
    </Box>
  );
}

export default Footer;
