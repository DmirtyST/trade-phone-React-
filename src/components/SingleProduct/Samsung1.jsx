/** @format */

import React, {useState} from "react";

let Samsung1 = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => {
		setClick(!click);
	};
	return <div></div>;
};

export default Samsung1;
