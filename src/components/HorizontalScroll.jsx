/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";

function HorizontalScroll({ bodyPart, bodyPartsList, setBodyPart }) {
	// console.log(bodyPartsList);

	return (
		<Box className="container">
			{bodyPartsList &&
				bodyPartsList.map((item) => (
					<Box
						sx={{ my: "5em", py: "1em" }}
						key={item || item.id}
						title={item || item.id}
					>
						<BodyPart
							setBodyPart={setBodyPart}
							bodyPart={bodyPart}
							item={item}
						/>
					</Box>
				))}
		</Box>
	);
}

export default HorizontalScroll;
