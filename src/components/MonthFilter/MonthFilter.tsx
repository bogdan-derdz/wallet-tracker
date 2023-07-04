import { FC, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setDateFilter } from "../../store/preferences/preferencesSlice";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import styles from "./MonthFilter.module.scss";

const MonthFilter: FC = () => {
	const dispatch = useAppDispatch();
	const { dateFilter } = useAppSelector((state) => state.preferencesSlice);

	//* Current Date
	const month = new Date().toLocaleDateString("default", {
		month: "2-digit",
	});

	const year = new Date().toLocaleDateString("default", {
		year: "numeric",
	});

	const currentDate = `${year}-${month}`;

	useEffect(() => {
		dispatch(setDateFilter(currentDate));
	}, []);

	//* Ref for input through which buttons change value
	const ref = useRef<HTMLInputElement>(null);

	const handleChange = (action: "up" | "down") => {
		switch (action) {
			case "down":
				ref.current?.stepDown();
				break;
			case "up":
				ref.current?.stepUp();
				break;
		}

		dispatch(setDateFilter(ref.current?.value!));
	};

	return (
		<div className={styles.wrapper}>
			<button onClick={() => handleChange("down")}>
				<MdOutlineArrowBackIos size="20px" />
			</button>

			<input
				className={styles.input}
				value={dateFilter}
				step={1}
				onChange={(e) => dispatch(setDateFilter(e.currentTarget.value))}
				ref={ref}
				type="month"
				name="monthFilter"
				id="monthFilter"
				max={currentDate}
				readOnly
			/>

			<button onClick={() => handleChange("up")}>
				<MdOutlineArrowForwardIos size="20px" />
			</button>
		</div>
	);
};

export default MonthFilter;
