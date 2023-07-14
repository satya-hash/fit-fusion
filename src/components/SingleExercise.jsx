/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Box, Stack, Typography } from "@mui/material";
// import bodyImg from "../assets/bodyPart1.png";
// import equipImg from "../assets/equipment1.png";
// import targetImg from "../assets/target1.png";
import Loader from "./Loader";
import bodyImg from "../assets/bodyPart.png";
import equipImg from "../assets/equipment.png";
import targetImg from "../assets/target.png";

function SingleExercise({ singleExercise }) {
  if (!singleExercise) return <Loader />;

  const { gifUrl, name, bodyPart, equipment, target } = singleExercise;

  return (
    <Stack
      className="single-exercise"
      direction="row"
      alignItems="center"
      sx={{
        px: { xs: "2em", lg: "12em" },
        py: "1em",
        flexDirection: { lg: "row", xs: "column" },
        gap: { lg: "8em", xs: "3em" },
      }}
    >
      {" "}
      <Stack justifyContent="center" alignItems="center">
        {" "}
        <img
          src={gifUrl}
          width="100%"
          alt={name}
          className="detail-image"
        />{" "}
      </Stack>
      <Stack>
        {" "}
        <Typography
          mb="1em"
          variant="h4"
          fontWeight="600"
          textTransform="capitalize"
        >
          {" "}
          {name}{" "}
        </Typography>{" "}
        <Typography mb="2em">
          {" "}
          <strong style={{ textTransform: "capitalize" }}> {name} </strong>
          is a targeted exercise that engages the{" "}
          <strong style={{ textTransform: "capitalize" }}> {target} </strong> to
          improve strength, stability, and flexibility in the{" "}
          <strong style={{ textTransform: "capitalize" }}>{bodyPart}</strong>.{" "}
        </Typography>
        <Stack gap={3}>
          <Stack direction="row" alignItems="center" gap={3}>
            {" "}
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                p: "1em",
                backgroundColor: "#ff9945",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
              }}
            >
              {" "}
              <img
                src={bodyImg}
                width="100%"
                loading="lazy"
                alt={bodyPart}
              />{" "}
            </Stack>{" "}
            <Typography textTransform="capitalize" fontWeight="600">
              {" "}
              {bodyPart}{" "}
            </Typography>{" "}
          </Stack>
          <Stack direction="row" alignItems="center" gap={3}>
            {" "}
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "80px",
                height: "80px",
                p: "1em",
                backgroundColor: "#ff9945",
                borderRadius: "50%",
              }}
            >
              {" "}
              <img src={targetImg} width="70%" alt={target} />{" "}
            </Stack>{" "}
            <Typography textTransform="capitalize" fontWeight="600">
              {" "}
              {target}{" "}
            </Typography>{" "}
          </Stack>
          <Stack direction="row" alignItems="center" gap={3}>
            {" "}
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                width: "80px",
                height: "80px",
                p: "1em",
                backgroundColor: "#ff9945",
                borderRadius: "50%",
              }}
            >
              {" "}
              <img src={equipImg} width="70%" alt={equipment} />{" "}
            </Stack>{" "}
            <Typography textTransform="capitalize" fontWeight="600">
              {" "}
              {equipment}{" "}
            </Typography>{" "}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SingleExercise;
