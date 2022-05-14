/** @format */

import {Route, Routes, Navigate} from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App(props) {
	return (
		<div className="app-wrapper">
			<Header />
			<Routes>
				<Route path="/" element={<Navigate replace to="/home" />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
