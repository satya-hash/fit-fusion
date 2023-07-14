/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import gymIcon from "../assets/gymIcon.png";

function BodyPart({ item, bodyPart, setBodyPart }) {
	return (
		<Stack
			type="button"
			justifyContent="center"
			alignItems="center"
			className="bodyPart-card"
			sx={{
				borderTop: bodyPart === item ? "3px solid #ff9945" : "",
				width: "200px",
				height: "200px",
				gap: "1em",
				cursor: "pointer",
				textTransform: "capitalize",
				boxShadow: "5px 10px 15px -3px rgba(0,0,0,0.1)",
				borderRadius: " 0  0 2em 0",
				color: "#323232",
			}}
			onClick={() => {
				setBodyPart(item);
				window.scrollTo({ top: 1300, behavior: "smooth" });
			}}
		>
			<Box sx={{ width: "80px" }}>
				<img src={gymIcon} alt="gymIcon" width="100%" />
			</Box>
			<Typography fontWeight="600"> {item} </Typography>
		</Stack>
	);
}

export default BodyPart;
