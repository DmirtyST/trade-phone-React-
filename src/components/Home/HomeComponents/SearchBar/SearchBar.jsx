/** @format */

import styles from "./SearchBar.module.scss";
import {FaBeer, FaSearch} from "react-icons/fa";

let SearchBar = ({value, changeInput}) => {
	return (
		<div className={styles.search}>
			<div className={styles.controller}>
				<input placeholder="Поиск товара" type="text" value={value} onChange={changeInput} />
			</div>
		</div>
	);
};

export default SearchBar;
