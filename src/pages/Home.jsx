import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import { useState } from "react";

function Home() {
	const [exercises, setExercises] = useState("");
	const [bodyPart, setBodyPart] = useState("all");

	return (
		<Box>
			<HeroSection />
			<SearchExercises
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
				setExercises={setExercises}
			/>
			<Exercises
				bodyPart={bodyPart}
				exercises={exercises}
				setExercises={setExercises}
			/>
		</Box>
	);
}

export default Home;
