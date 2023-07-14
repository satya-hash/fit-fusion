/* eslint-disable react/prop-types */
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ExerciseCard({ item }) {
	let { name, gifUrl, target, bodyPart, id } = item;
	return (
		<Stack className="exercise-card" sx={{ p: "2em" }}>
			<Link
				to={`/exercise/${id}`}
				style={{ textDecoration: "none" }}
				onClick={() => window.scrollTo({ top: 0 })}
			>
				{" "}
				<Box>
					{" "}
					<img
						src={gifUrl}
						alt={name}
						width="100%"
						style={{ objectFit: "contain" }}
					/>{" "}
				</Box>{" "}
				<Typography
					variant="h6"
					color="#323232"
					fontWeight="600"
					sx={{ textTransform: "capitalize" }}
				>
					{" "}
					{name}{" "}
				</Typography>
				<Stack direction="row" gap={1} mt="1em">
					<Button
						sx={{
							backgroundColor: "#ff9945",
							p: ".3em .8em",
							borderRadius: "3em",
							color: "#fff",
						}}
					>
						{" "}
						{bodyPart}{" "}
					</Button>
					<Button
						sx={{
							backgroundColor: "#ff9945",
							p: ".3em .8em",
							borderRadius: "3em",
							color: "#fff",
						}}
					>
						{" "}
						{target}{" "}
					</Button>
				</Stack>
			</Link>
		</Stack>
	);
}

export default ExerciseCard;
