/** @format */

import styles from "./Home.module.scss";
import {useEffect, useState} from "react";
import AsidePanels from "./HomeComponents/AsidePanels/SearchPanels";
import HomeContentRight from "./HomeComponents/HomeContentRight/HomeContentRight";
import {MobileData} from "./CardData";
import ErrorSearch from "../ErrorSearch/ErroSearch";
import {Cusines, RamPhone, MemoryPhone, ScreenPhone, MainCameraPhone, FrontalCameraPhone, BatteryPhone} from "../CheckedData/CheckedData";
import {Container} from "@mui/material";
import Burger from "../HeaderBurgerMenu/Burger";

let Home = () => {
	const [selectedPrice, setSelectedPrice] = useState([5000, 35000]);
	const [resultsFound, setResultsFound] = useState(true);
	const handleChangePrice = (e, value) => {
		setSelectedPrice(value);
	};
	const [list, setList] = useState(MobileData);
	//**------------------------------------------- */
	const [cuisines, setCuisines] = useState(Cusines);
	const [ramPhone, setRamPhone] = useState(RamPhone);
	const [memoryPhone, setMemoryPhone] = useState(MemoryPhone);
	const [screenPhone, setScreenPhone] = useState(ScreenPhone);
	const [maincameraPhone, setmainCameraPhone] = useState(MainCameraPhone);
	const [frontalcameraPhone, setfrontalCameraPhone] = useState(FrontalCameraPhone);
	const [batteryPhone, setBatteryPhone] = useState(BatteryPhone);

	//** visible Menu */
	const [visible, setVisible] = useState(false);

	//** handle cussines */
	const handleChangeChecked = (id) => {
		const cusinesStateList = cuisines;
		const changeCheckedCuisines = cusinesStateList.map((item) => (item.id === id ? {...item, checked: !item.checked} : item));
		setCuisines(changeCheckedCuisines);
	};
	//** handle ram */
	const handleChangeCheckedRam = (id) => {
		const ramStateList = ramPhone;
		const changeCheckedRam = ramStateList.map((item) => (item.id === id ? {...item, checked: !item.checked} : item));
		setRamPhone(changeCheckedRam);
	};
	//** handle memory */
	const handleChangeCheckedMemory = (id) => {
		const ramStateList = memoryPhone;
		const changeCheckedMemory = ramStateList.map((item) => (item.id === id ? {...item, checked: !item.checked} : item));
		setMemoryPhone(changeCheckedMemory);
	};
	//** handle screen */
	const handleChangeCheckedScreen = (id) => {
		const screenStateList = screenPhone;
		const changeCheckedScreen = screenStateList.map((item) => (item.id === id ? {...item, checked: !item.checked} : item));
		setScreenPhone(changeCheckedScreen);
	};
	//** handle mainCamera */
	const handleChangeCheckedMainCamera = (id) => {
		const mainCameraStateList = maincameraPhone;
		const changeCheckedMainCamera = mainCameraStateList.map((item) => (item.id === id ? {...item, checked: !item.checked} : item));
		setmainCameraPhone(changeCheckedMainCamera);
	};

	//** handle frontalCamera */
	const handleChangeCheckedFrontalCamera = (id) => {
		const frontalCameraStateList = frontalcameraPhone;
		const changeCheckedFrontalCamera = frontalCameraStateList.map((item) => (item.id === id ? {...item, checked: !item.checked} : item));
		setfrontalCameraPhone(changeCheckedFrontalCamera);
	};

	//** handle battery */
	const handleChangeCheckedBattery = (id) => {
		const BatteryStateList = batteryPhone;
		const changeCheckedBattery = BatteryStateList.map((item) => (item.id === id ? {...item, checked: !item.checked} : item));
		setBatteryPhone(changeCheckedBattery);
	};
	const AllFilter = () => {
		let updateFilterList = MobileData;
		/**--------------------------------------------------------------------------------------------------- */
		// Name Product Filter
		const cuisinesChecked = cuisines.filter((item) => item.checked).map((item) => item.label.toLowerCase());

		if (cuisinesChecked.length) {
			updateFilterList = updateFilterList.filter((item) => cuisinesChecked.includes(item.cuisine));
		}

		// Ram Product Filter
		const rumChecked = ramPhone.filter((item) => item.checked).map((item) => item.label.toLowerCase());

		if (rumChecked.length) {
			updateFilterList = updateFilterList.filter((item) => rumChecked.includes(item.ram));
		}

		// Memory Product Filter
		const memoryChecked = memoryPhone.filter((item) => item.checked).map((item) => item.label.toLowerCase());

		if (memoryChecked.length) {
			updateFilterList = updateFilterList.filter((item) => memoryChecked.includes(item.memory));
		}

		// Screen Product Filter
		const screenChecked = screenPhone.filter((item) => item.checked).map((item) => item.label.toLowerCase());

		if (screenChecked.length) {
			updateFilterList = updateFilterList.filter((item) => screenChecked.includes(item.screen));
		}

		// MainCamera Product Filter
		const mainCameraChecked = maincameraPhone.filter((item) => item.checked).map((item) => item.label.toLowerCase());

		if (mainCameraChecked.length) {
			updateFilterList = updateFilterList.filter((item) => mainCameraChecked.includes(item.mainCamera));
		}

		// FrontalCamera Product Filter
		const FrontalCameraChecked = frontalcameraPhone.filter((item) => item.checked).map((item) => item.label.toLowerCase());

		if (FrontalCameraChecked.length) {
			updateFilterList = updateFilterList.filter((item) => FrontalCameraChecked.includes(item.frontalCamera));
		}

		// Battery Product Filter
		const BattaryChecked = batteryPhone.filter((item) => item.checked).map((item) => item.label.toLowerCase());

		if (BattaryChecked.length) {
			updateFilterList = updateFilterList.filter((item) => BattaryChecked.includes(item.battery));
		}
		/**--------------------------------------------------------------------------------------------------- */

		/**Price Filter */
		const minPrice = selectedPrice[0];
		const maxPrice = selectedPrice[1];
		updateFilterList = updateFilterList.filter((item) => item.price >= minPrice && item.price <= maxPrice);
		setList(updateFilterList);
		!updateFilterList.length ? setResultsFound(false) : setResultsFound(true);
	};

	useEffect(() => {
		AllFilter();
	}, [selectedPrice, cuisines, ramPhone, memoryPhone, screenPhone, maincameraPhone, frontalcameraPhone, batteryPhone]);

	return (
		<div>
			{/** search bar */}

			{/**search panels */}

			<div className={styles.wrapper}>
				<Burger visible={visible} setVisible={setVisible} />
				<Container maxWidth="xl">
					<div className={styles.row}>
						<div className={styles.initialPanel}>
							<AsidePanels
								selectedPrice={selectedPrice}
								changePrice={handleChangePrice}
								ramPhone={ramPhone}
								changeCheckedRam={handleChangeCheckedRam}
								cuisines={cuisines}
								changeChecked={handleChangeChecked}
								memoryPhone={memoryPhone}
								changeCheckedMemory={handleChangeCheckedMemory}
								changeCheckedScreen={handleChangeCheckedScreen}
								screenPhone={screenPhone}
								maincameraPhone={maincameraPhone}
								changeCheckedMainCamera={handleChangeCheckedMainCamera}
								changeCheckedFrontalCamera={handleChangeCheckedFrontalCamera}
								frontalcameraPhone={frontalcameraPhone}
								changeCheckedBattery={handleChangeCheckedBattery}
								batteryPhone={batteryPhone}
							/>
						</div>

						<div className={visible ? styles.mediaPanelActive : styles.mediaPanel}>
							<i onClick={() => setVisible(!visible)} className={styles.closeMediaPanel}>
								Результат поиска
							</i>

							<AsidePanels
								selectedPrice={selectedPrice}
								changePrice={handleChangePrice}
								ramPhone={ramPhone}
								changeCheckedRam={handleChangeCheckedRam}
								cuisines={cuisines}
								changeChecked={handleChangeChecked}
								memoryPhone={memoryPhone}
								changeCheckedMemory={handleChangeCheckedMemory}
								changeCheckedScreen={handleChangeCheckedScreen}
								screenPhone={screenPhone}
								maincameraPhone={maincameraPhone}
								changeCheckedMainCamera={handleChangeCheckedMainCamera}
								changeCheckedFrontalCamera={handleChangeCheckedFrontalCamera}
								frontalcameraPhone={frontalcameraPhone}
								changeCheckedBattery={handleChangeCheckedBattery}
								batteryPhone={batteryPhone}
							/>
						</div>

						{/** list empty view */}
						<div className={styles.item}>{resultsFound ? <HomeContentRight visible={visible} setVisible={setVisible} list={list} /> : <ErrorSearch visible={visible} setVisible={setVisible} />}</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Home;
