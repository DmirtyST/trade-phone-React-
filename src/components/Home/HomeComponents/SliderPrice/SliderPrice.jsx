/** @format */

import {Slider} from "@mui/material";
import {makeStyles} from "@mui/styles";
import MuiInput from "@mui/material/Input";
const useStyles = makeStyles({
	root: {
		width: "100%",
	},
	thumb: {
		color: "#f06100",
	},
	rail: {
		color: `red`,
	},
	track: {
		color: "rgb(212, 212, 212)",
	},
});

let SliderPrice = ({value, changePrice}) => {
	const classes = useStyles();
	return (
		<div>
			<Slider
				classes={{
					thumb: classes.thumb,
					rail: classes.rail,
					track: classes.track,
				}}
				min={5000}
				max={35000}
				valueLabelDisplay="off"
				value={value}
				onChange={changePrice}
				size="small"
				aria-labelledby="input-slider"
			/>
			<MuiInput value={value} size="small" onChange={""} type="text" />
		</div>
	);
};

export default SliderPrice;
