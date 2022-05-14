/** @format */

import styles from "./SearchPanels.module.scss";
import SliderPrice from "../SliderPrice/SliderPrice";
import ChekedNameProduct from "../ChekedNameProduct/ChekedNameProduct";
import ChekedRamProduct from "../ChekedNameProduct/ChekedRamProduct";
import ChekedMemoryProduct from "../ChekedNameProduct/ChekedMemoryProduct";
import ChekedScreenProduct from "../ChekedNameProduct/ChekedScreenProduct";
import ChekedMainCameraProduct from "../ChekedNameProduct/ChekedMainCameraProduct";
import ChekedFrontalCameraProduct from "../ChekedNameProduct/ChekedFrontalCameraProduct";
import ChekedBatteryProduct from "../ChekedNameProduct/ChekedBatteryProduct";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import {motion, AnimatePresence} from "framer-motion";
let AsidePanels = ({
	selectedPrice,
	changePrice,
	changeChecked,
	cuisines,
	changeCheckedRam,
	ramPhone,
	changeCheckedMemory,
	memoryPhone,
	screenPhone,
	changeCheckedScreen,
	changeCheckedMainCamera,
	maincameraPhone,
	changeCheckedFrontalCamera,
	frontalcameraPhone,
	batteryPhone,
	changeCheckedBattery,
}) => {
	const [expanded, setExpanded] = React.useState("panel1");

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<div className={styles.searchPanel}>
			{/**Price Range */}
			<div className={styles.form_controll}>
				<SliderPrice value={selectedPrice} changePrice={changePrice} />
			</div>
			{/**Name Product */}
			<Accordion sx={{width: "100%"}} expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
				<AccordionSummary sx={{color: "text.secondary", background: "rgb(255, 255, 255)"}} expandIcon={<ExpandMoreIcon sx={{color: "#f06100"}} />} aria-controls="panel1bh-content" id="panel1bh-header">
					<Typography sx={{color: "black", fontSize: "15px"}}>
						<p className={styles.title}>Бренды</p>
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{padding: "15px", margin: "0"}}>
					<div className={styles.form_controll}>
						{cuisines.map((cuisine) => (
							<ChekedNameProduct key={cuisine.id} cuisine={cuisine} changeChecked={changeChecked} />
						))}
					</div>
				</AccordionDetails>
			</Accordion>
			{/**Memory Product */}
			<Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
				<AccordionSummary sx={{color: "text.secondary", background: "rgb(255, 255, 255)"}} expandIcon={<ExpandMoreIcon sx={{color: "#f06100"}} />} aria-controls="panel1bh-content" id="panel1bh-header">
					<Typography sx={{color: "black", fontSize: "15px"}}>
						<p className={styles.title}>Объем встроенной памяти</p>
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{padding: "15px", margin: "0"}}>
					<div className={styles.form_controll}>
						{memoryPhone.map((memory) => (
							<ChekedMemoryProduct key={memory.id} memory={memory} changeCheckedMemory={changeCheckedMemory} />
						))}
					</div>
				</AccordionDetails>
			</Accordion>
			{/**Ram Product */}
			<Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
				<AccordionSummary sx={{color: "text.secondary", background: "rgb(255, 255, 255)"}} expandIcon={<ExpandMoreIcon sx={{color: "#f06100"}} />} aria-controls="panel1bh-content" id="panel1bh-header">
					<Typography sx={{color: "black", fontSize: "15px"}}>
						<p className={styles.title}>Объем оперативной памяти</p>
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{padding: "15px", margin: "0"}}>
					<div className={styles.form_controll}>
						{ramPhone.map((ram) => (
							<ChekedRamProduct key={ram.id} ram={ram} changeCheckedRam={changeCheckedRam} />
						))}
					</div>
				</AccordionDetails>
			</Accordion>
			{/**ScreenProduct */}
			<Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
				<AccordionSummary sx={{color: "text.secondary", background: "rgb(255, 255, 255)"}} expandIcon={<ExpandMoreIcon sx={{color: "#f06100"}} />} aria-controls="panel1bh-content" id="panel1bh-header">
					<Typography sx={{color: "black", fontSize: "15px"}}>
						<p className={styles.title}>Тип экрана</p>
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{padding: "15px", margin: "0"}}>
					<div className={styles.form_controll}>
						{screenPhone.map((screen) => (
							<ChekedScreenProduct key={screen.id} screen={screen} changeCheckedScreen={changeCheckedScreen} />
						))}
					</div>
				</AccordionDetails>
			</Accordion>
			{/**Main Kamera */}
			<Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
				<AccordionSummary sx={{color: "text.secondary", background: "rgb(255, 255, 255)"}} expandIcon={<ExpandMoreIcon sx={{color: "#f06100"}} />} aria-controls="panel1bh-content" id="panel1bh-header">
					<Typography sx={{color: "black", fontSize: "15px"}}>
						<p className={styles.title}>Основная камера, Мп</p>
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{padding: "15px", margin: "0"}}>
					<div className={styles.form_controll}>
						{maincameraPhone.map((maincamera) => (
							<ChekedMainCameraProduct key={maincamera.id} maincamera={maincamera} changeCheckedMainCamera={changeCheckedMainCamera} />
						))}
					</div>
				</AccordionDetails>
			</Accordion>
			{/**Frontal Kamera */}
			<Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
				<AccordionSummary sx={{color: "text.secondary", background: "rgb(255, 255, 255)"}} expandIcon={<ExpandMoreIcon sx={{color: "#f06100"}} />} aria-controls="panel1bh-content" id="panel1bh-header">
					<Typography sx={{color: "black", fontSize: "15px"}}>
						<p className={styles.title}>Фронтальная камера, Мп</p>
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{padding: "15px", margin: "0"}}>
					<div className={styles.form_controll}>
						{frontalcameraPhone.map((frontalcamera) => (
							<ChekedFrontalCameraProduct key={frontalcamera.id} frontalcamera={frontalcamera} changeCheckedFrontalCamera={changeCheckedFrontalCamera} />
						))}
					</div>
				</AccordionDetails>
			</Accordion>
			{/**Battery  */}
			<Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
				<AccordionSummary sx={{color: "text.secondary", background: "rgb(255, 255, 255)"}} expandIcon={<ExpandMoreIcon sx={{color: "#f06100"}} />} aria-controls="panel1bh-content" id="panel1bh-header">
					<Typography sx={{color: "black", fontSize: "15px"}}>
						<p className={styles.title}>Емкость аккумулятора</p>
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{padding: "15px", margin: "0"}}>
					<Typography sx={{width: "100%"}}>
						<div className={styles.form_controll}>
							{batteryPhone.map((battery) => (
								<ChekedBatteryProduct key={battery.id} battery={battery} changeCheckedBattery={changeCheckedBattery} />
							))}
						</div>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default AsidePanels;
