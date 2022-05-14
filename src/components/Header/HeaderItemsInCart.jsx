/** @format */
import styles from "./Header.module.scss";
let ItemsinCart = ({valueBasket = 0}) => {
	return valueBasket > 0 ? <div className={styles.ItemsinCart}>{valueBasket}</div> : null;
};
export default ItemsinCart;
