/** @format */
import {Checkbox, FormControlLabel} from "@mui/material";
import {makeStyles} from "@mui/styles";
import React from "react";
const useStyles = makeStyles({
	root: {
		"&$checked": {
			color: "#f06100",
		},
	},
	checked: {
		color: "red",
	},
	wrap: {
		width: "100%",
		display: "flex",
		flexDirection: "row-reverse",
		justifyContent: "space-between",
		alignItems: "center",
		marginLeft: 0,
	},
	label: {
		fontSize: "0.9rem",
	},
});
const ChekedMemoryProduct = ({changeCheckedMemory, memory}) => {
	const classes = useStyles();
	const {checked, label, id} = memory;
	return (
		<div>
			<div>
				<FormControlLabel
					classes={{
						label: classes.label,
						root: classes.wrap,
					}}
					control={
						<Checkbox
							classes={{
								checked: classes.checked,
								root: classes.root,
							}}
							size="small"
							checked={checked}
							onChange={() => changeCheckedMemory(id)}
							inputProps={{"aria-label": "checkbox with small size"}}
						/>
					}
					label={label}
				/>
			</div>
		</div>
	);
};

export default ChekedMemoryProduct;
