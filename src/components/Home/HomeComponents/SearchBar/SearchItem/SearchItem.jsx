/** @format */

let SearchItem = ({e: {src, names, path}}) => {
	return (
		<li key={key}>
			<div className={style.image}>
				<img src={src} alt="" />
			</div>

			<NavLink onClick={() => setSearch(!search)} to={path}>
				{names}
			</NavLink>
		</li>
	);
};

export default SearchItem;
