/** @format */
import style from "./Header.module.scss";
import {FaBeer, FaShoppingBasket} from "react-icons/fa";
import {useSelector} from "react-redux";
import HeaderBasketMenu from "./HeaderBasketMenu";

import {calcTotalPrice} from "./PriceFnc";
import {useState} from "react";
import ItemsinCart from "./HeaderItemsInCart";
let HeaderBasket = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
	const items = useSelector((state) => state.cart.itemsInCart);
	const totalPrice = calcTotalPrice(items);
	return (
		<div>
			<div className={style.basket}>
				<ItemsinCart valueBasket={items.length} />
				<i onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}>
					<FaShoppingBasket />
				</i>
			</div>
			{isCartMenuVisible && <HeaderBasketMenu items={items} onClick={() => null} />}
		</div>
	);
};

export default HeaderBasket;
