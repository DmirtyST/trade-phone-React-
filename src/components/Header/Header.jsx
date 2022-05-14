/** @format */
import {useState} from "react";
import {NavLink} from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBar from "../Home/HomeComponents/SearchBar/SearchBar";
import {MobileData} from "../Home/CardData";
import {Container} from "@mui/material";
import HeaderBasket from "./HeaderBasket";

let Header = () => {
	let [search, setSearch] = useState("");

	let FiltredItem = MobileData.filter((e) => {
		if (search == "") {
			return "";
		} else if (e.names.toLowerCase().includes(search.toString().toLowerCase())) {
			return e;
		}
	});

	let changeInput = (e) => {
		setSearch(e.target.value);
	};
	return (
		<header className={styles.header}>
			<Container maxWidth="xl	">
				<div className={styles.row}>
					<NavLink className={styles.logo} to={"/home"}>
						<img src="./Image/logo.png"></img>
					</NavLink>
					<div>
						<div className={styles.SearchInitital}>
							<SearchBar changeInput={changeInput} />
						</div>
						<ul className={styles.searchItem}>
							{FiltredItem.map((e, key) => {
								return (
									<li key={key}>
										<div className={styles.image}>
											<img src={e.src} alt="" />
										</div>

										<NavLink onClick={() => setSearch(!search)} to={e.path}>
											{e.names}
										</NavLink>
									</li>
								);
							})}
						</ul>
					</div>
					<HeaderBasket />
				</div>
			</Container>
			<div className={styles.SearchMobile}>
				<SearchBar changeInput={changeInput} />
			</div>
		</header>
	);
};

export default Header;
