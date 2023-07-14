/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScroll from "./HorizontalScroll";

function SearchExercises({ setExercises, setBodyPart, bodyPart }) {
	const [search, setSearch] = useState("");
	const [bodyPartsList, setBodyPartsList] = useState([]);

	async function handleSearch() {
		if (search) {
			const exerciseData = await fetchData(
				"https://exercisedb.p.rapidapi.com/exercises",
				exerciseOptions
			);
			const searchExercises = exerciseData.filter(
				(exercise) =>
					exercise.name.toLowerCase().includes(search) ||
					exercise.target.toLowerCase().includes(search) ||
					exercise.bodyPart.toLowerCase().includes(search) ||
					exercise.equipment.toLowerCase().includes(search)
			);
			setSearch("");
			setExercises(searchExercises);
			window.scrollTo({ top: 1100, behavior: "smooth" });
		}
	}

	useEffect(() => {
		async function dataFetch() {
			const bodyPartsData = await fetchData(
				"https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
				exerciseOptions
			);

			setBodyPartsList(["all", ...bodyPartsData]);
		}
		dataFetch();
	}, []);

	return (
		<Stack
			position="relative"
			sx={{ mt: "1.5em" }}
			justifyContent="center"
			alignItems="center"
		>
			<Typography
				variant="h2"
				fontWeight="600"
				color="#323232"
				mb=".5em"
				sx={{
					textTransform: "capitalize",
					textAlign: "center",
					fontSize: { lg: "36px", md: "32px", xs: "24px" },
				}}
			>
				{" "}
				Explore a world of awesome <br /> exercises{" "}
			</Typography>
			<Stack direction="row" justifyContent="center" alignItems="stretch">
				{" "}
				<TextField
					placeholder="Search Exercise..."
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
					sx={{
						input: {
							outline: "none",
							border: "none",
							fontWeight: "600",
							borderRadius: "4px",
						},
						borderRadius: "4px",
						width: { lg: "800px", md: "350px" },
					}}
				/>{" "}
				<Button variant="contained" onClick={handleSearch}>
					{" "}
					Search{" "}
				</Button>{" "}
			</Stack>
			<Box position="relative " width="90%" mx="auto">
				<HorizontalScroll
					setBodyPart={setBodyPart}
					bodyPart={bodyPart}
					bodyPartsList={bodyPartsList}
				/>
			</Box>
		</Stack>
	);
}

export default SearchExercises;
