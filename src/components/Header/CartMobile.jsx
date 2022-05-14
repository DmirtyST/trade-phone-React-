/** @format */

import styles from "./Header.module.scss";
let CartMobile = ({price, names, src, id}) => {
	return (
		<div className={styles.CartMobile}>
			<div className={styles.groupe}>
				<p>
					{names}
					<span>{price}грн</span>
				</p>
				<div className={styles.image}>
					<img src={src} alt="" />
				</div>
			</div>
		</div>
	);
};

export default CartMobile;
