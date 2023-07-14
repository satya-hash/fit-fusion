/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

function SingleVideo({ item, isVideo }) {
	if (!isVideo) {
		return <ExerciseCard item={item} />;
	}
	const { title, channelName, thumbnails, videoId } = item;
	return (
		<a
			style={{ borderRadius: "2em 0 0 0", color: "#323232" }}
			target="_blank"
			rel="noreferrer"
			href={` https://www.youtube.com/watch?v=${videoId} `}
			className="exercise-video"
		>
			<Box>
				<img src={thumbnails[0].url} alt={title} width="100%" />
			</Box>
			<Typography fontWeight="600" variant="h5" textTransform="capitalize">
				{" "}
				{title}{" "}
			</Typography>
			<Typography variant="body1"> {channelName} </Typography>
		</a>
	);
}

export default SingleVideo;
