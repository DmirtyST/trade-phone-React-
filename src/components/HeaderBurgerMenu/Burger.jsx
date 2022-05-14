/** @format */


import styles from "./Burger.module.scss";
let Burger = ({visible, setVisible}) => {
	return (
		<div className={visible ? styles.Burger + " " + styles.BurgerActive : styles.Burger} onClick={() => setVisible(!visible)}>
			<div className={styles.burgerLine   }></div>
		</div>
	);
};

export default Burger;
