import { Stack } from "@mui/material";
import top from "../assets/scrolltop.png";
import { useState } from "react";

function ScrollToTop() {
  const [show, setShow] = useState(false);

  function toggleShow() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setShow(true);
    } else if (scrolled <= 300) {
      setShow(false);
    }
  }
  window.addEventListener("scroll", toggleShow);
  return (
    <Stack
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
      justifyContent="center"
      alignItems="center"
      sx={{
        display: show ? "flex" : "none",
        position: "fixed",
        bottom: "50px",
        right: "20px",
        width: "40px",
        height: "40px",
        backgroundColor: "#ff9945",
        borderRadius: "50%",
      }}
    >
      {" "}
      <img src={top} alt="top" width="15px" />{" "}
    </Stack>
  );
}

export default ScrollToTop;
