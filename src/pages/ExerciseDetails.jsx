/* eslint-disable no-unused-vars */
import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchData, exerciseOptions, ytOptions } from "../utils/fetchData";
import SingleExercise from "../components/SingleExercise";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

function ExerciseDetails() {
	const [singleExercise, setsingleExercise] = useState({});
	const [exerciseVideos, setexerciseVideos] = useState({});
	const [targetExerciseVideos, setTargetExerciseVideos] = useState({});
	const [equipmentExerciseVideos, setEquipmentExerciseVideos] = useState({});
	const { id } = useParams();

	useEffect(() => {
		async function fetchExerciseData() {
			const exerciseDB = "https://exercisedb.p.rapidapi.com";
			const ytSearch = "https://youtube-search-and-download.p.rapidapi.com";

			const singleExerciseData = await fetchData(
				`${exerciseDB}/exercises/exercise/${id}`,
				exerciseOptions
			);
			setsingleExercise(singleExerciseData);

			const exerciseVideosData = await fetchData(
				`${ytSearch}/search?query=${singleExerciseData.name}`,
				ytOptions
			);
			setexerciseVideos(exerciseVideosData);

			const targetExerciseData = await fetchData(
				`${exerciseDB}/exercises/target/${singleExerciseData.target}`,
				exerciseOptions
			);
			setTargetExerciseVideos(targetExerciseData);

			const equipmentExerciseData = await fetchData(
				`${exerciseDB}/exercises/equipment/${singleExerciseData.equipment}`,
				exerciseOptions
			);
			setEquipmentExerciseVideos(equipmentExerciseData);
		}
		fetchExerciseData();
	}, [id]);

	return (
		<Box className="exercise-page">
			<SingleExercise singleExercise={singleExercise} />
			<ExerciseVideos exerciseVideos={exerciseVideos.contents} />
			<SimilarExercises
				targetExerciseVideos={targetExerciseVideos}
				equipmentExerciseVideos={equipmentExerciseVideos}
			/>
		</Box>
	);
}

export default ExerciseDetails;
