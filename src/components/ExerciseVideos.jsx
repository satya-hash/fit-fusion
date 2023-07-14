/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import SingleVideo from "./SingleVideo";
import Loader from "./Loader";

function ExerciseVideos({ exerciseVideos }) {
	if (!exerciseVideos) return <Loader />;

	return (
		<Box sx={{ px: { xs: "2em", lg: "5em" }, py: "1em", m: "2em 0" }}>
			<Typography mb="2em" fontWeight="600" variant="h5">
				{" "}
				Exercise Demonstration{" "}
			</Typography>
			<Stack direction="row" gap={3} flexWrap="wrap">
				{exerciseVideos &&
					exerciseVideos.slice(0, 3).map((item, index) => {
						return <SingleVideo key={index} item={item.video} isVideo />;
					})}
			</Stack>
		</Box>
	);
}

export default ExerciseVideos;
