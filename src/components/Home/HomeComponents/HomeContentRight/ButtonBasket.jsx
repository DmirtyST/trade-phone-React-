/** @format */

import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setIteminCart, deleteItemFromCart} from "../../../../redux/Cart/reducer";

let ButtonBasket = ({className, game}) => {
	let dispatch = useDispatch();
	let items = useSelector((state) => state.cart.itemsInCart);
	const isItemInCart = items.some((item) => item.id === game.id);
	const handleClick = (e) => {
		e.stopPropagation();
		if (isItemInCart) {
			dispatch(deleteItemFromCart(game.id));
		} else {
			dispatch(setIteminCart(game));
		}
	};
	return (
		<button type={isItemInCart ? "secondary" : "primary"} onClick={handleClick} className={className}>
			{isItemInCart ? "Убрать" : "Купить"}
		</button>
	);
};

export default ButtonBasket;
