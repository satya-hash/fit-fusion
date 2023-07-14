/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

function Exercises({ exercises, setExercises, bodyPart }) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  function paginate(e, value) {
    setCurrentPage(value);
    window.scrollTo({ top: 1100, behavior: "smooth" });
  }

  useEffect(() => {
    async function fetchExercises() {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    }
    fetchExercises();
  }, [bodyPart]);

  return (
    <Box id="exercises">
      <Typography variant="h4" fontWeight="600" ml="1em" color="#323232">
        {" "}
        Exercise Results{" "}
      </Typography>
      <Stack
        mt="3em"
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="3em"
      >
        {" "}
        {exercises &&
          currentExercises.map((item, index) => {
            return <ExerciseCard key={index} item={item} />;
          })}
      </Stack>
      <Stack alignItems="center" m="5em 0">
        {exercises.length > 9 && (
          <Pagination
            defaultPage={1}
            cure
            color="standard"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
          ></Pagination>
        )}
      </Stack>
    </Box>
  );
}

export default Exercises;
