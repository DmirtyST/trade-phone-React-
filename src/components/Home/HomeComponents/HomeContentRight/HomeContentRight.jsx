/** @format */

import {NavLink} from "react-router-dom";
import style from "./HomeContentRight.module.scss";
import ButtonBasket from "./ButtonBasket";
let ItemHomeContent = ({game}) => {
	return (
		<div className={style.item}>
			<ul className={style.list}>
				<li>
					<img src="https://i.citrus.world/uploads/images/creatives/prom_cred.png" alt="" />
				</li>
				<li>
					<img src="https://i.citrus.world/uploads/stickers/samsung/yt_4_m_ru.png" alt="" />
				</li>
				<li>
					<img src="https://i.citrus.world/uploads/stickers/s/s/Spotify.png" alt="" />
				</li>
				<li>
					<img src="https://i.citrus.world/uploads/stickers/b/c/cacheback_5_ru.png" alt="" />
				</li>
			</ul>
			<div className={style.image}>
				<img src={game.src} alt="Image Phone" />
			</div>
			<div className={style.content}>
				<div className={style.title}>
					<NavLink to={game.path}>{game.names}</NavLink>
				</div>
				<div className={style.price}>{game.price}₴</div>
				<div className={style.keshbek}>
					<span>
						<img src="./Image/ic_cashback.svg" alt="" />
					</span>{" "}
					{game.keshbek}
				</div>

				<ButtonBasket className={style.btn} game={game} />
			</div>
		</div>
	);
};

let HomeContentRight = ({list, visible, setVisible}) => {
	return (
		<div className={style.row} onClick={() => setVisible(false)}>
			{list.map((game) => (
				<ItemHomeContent key={game.id} game={game} />
			))}
		</div>
	);
};

export default HomeContentRight;
