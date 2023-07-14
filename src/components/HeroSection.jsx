import { Button, Stack, Typography } from "@mui/material";

function HeroSection() {
  return (
    <Stack className="hero-section" sx={{ px: { xs: "2em", lg: "5em" } }}>
      <Stack position="relative">
        <Typography
          variant="h5"
          fontWeight="600"
          color="#ff9945"
          lineHeight="1.3em"
        >
          Fitness Club
        </Typography>
        <Typography
          variant="h3"
          fontWeight="600"
          sx={{ lineHeight: "1.3em", mb: ".5em", color: "#333" }}
        >
          Sweat, Smile &
          <br />
          Repeat
        </Typography>
        <Typography variant="body1" sx={{ mb: "1em", color: "#333" }}>
          Achieve your fitness goals with our cutting-edge training programs.
        </Typography>
        <Button
          variant="contained"
          color="error"
          sx={{
            backgroundColor: "#ff9945",
            width: "10em",
            p: ".5em",
          }}
        >
          {" "}
          Explore{" "}
        </Button>
        <Typography
          fontSize="200px"
          sx={{
            position: "absolute",
            opacity: ".2",
            textTransform: "uppercase",
            left: "150%",
            bottom: "-25%",
            display: { lg: "block", xs: "none" },
            transform: "rotate(-45deg)",
          }}
          fontWeight="600"
        >
          {" "}
          exercise{" "}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default HeroSection;
