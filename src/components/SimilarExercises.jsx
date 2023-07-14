/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";
import SingleVideo from "./SingleVideo";

function SimilarExercises({ targetExerciseVideos, equipmentExerciseVideos }) {
	// if (!targetExerciseVideos && !equipmentExerciseVideos) <Loader />;

	// console.log(targetExerciseVideos);

	return (
		<Box sx={{ px: { xs: "2em", lg: "5em" }, py: "1em" }}>
			<Typography m="2em 0" fontWeight="600" variant="h5">
				Exercise That Target Same Muscle Group{" "}
			</Typography>
			<Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3}>
				{targetExerciseVideos.length > 0 ? (
					targetExerciseVideos.slice(0, 3).map((item, index) => {
						return <SingleVideo key={index} item={item} />;
					})
				) : (
					<Loader />
				)}
			</Stack>
			<Typography m="2em 0" fontWeight="600" variant="h5">
				Exercises Using Same Equipment
			</Typography>
			<Stack direction="row" flexWrap="wrap" justifyContent="center" gap={3}>
				{equipmentExerciseVideos.length > 0 ? (
					equipmentExerciseVideos.slice(0, 3).map((item, index) => {
						return <SingleVideo key={index} item={item} />;
					})
				) : (
					<Loader />
				)}
			</Stack>
		</Box>
	);
}

export default SimilarExercises;
