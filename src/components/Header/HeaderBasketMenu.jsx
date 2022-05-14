/** @format */
import styles from "./Header.module.scss";
import {calcTotalPrice} from "./PriceFnc";
import CartMobile from "./CartMobile";
let HeaderBasketMenu = ({items, onClick}) => {
	return (
		<div className={styles.basketMenu}>
			<ul className={styles.basketMenuList}>
				{items.length > 0 ? items.map((game) => <CartMobile key={game.names} src={game.src} price={game.price} names={game.names} id={game.id} />) : "Корзина пуста"}
			</ul>

			{items.length > 0 ? (
				<div className={styles.listArrange}>
					<div className={styles.listPrice}>
						<span>Итого:</span>
						<span>{calcTotalPrice(items)}грн</span>
					</div>
					<button onClick={onClick} className={styles.btn}>
						Оформить заказ
					</button>
				</div>
			) : null}
		</div>
	);
};

export default HeaderBasketMenu;
