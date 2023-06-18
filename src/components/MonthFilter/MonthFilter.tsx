import { FC, useRef, useState } from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

import styles from "./MonthFilter.module.scss";

const MonthFilter: FC = () => {
	const month = new Date().toLocaleDateString("default", {
		month: "2-digit",
	});
	const year = new Date().toLocaleDateString("default", {
		year: "numeric",
	});

	const currentDate = `${year}-${month}`;

	const [date, setDate] = useState<string>(currentDate);

	const ref = useRef<HTMLInputElement>(null);

	return (
		<div className={styles.wrapper}>
			<button onClick={() => ref.current?.stepDown()}>
				<MdOutlineArrowBackIos size="20px" />
			</button>
			<input
				className={styles.input}
				value={date}
				onChange={(e) => setDate(e.target.value)}
				ref={ref}
				type="month"
				name="monthFilter"
				id="monthFilter"
				max={currentDate}
				readOnly={true}
			/>
			<button onClick={() => ref.current?.stepUp()}>
				<MdOutlineArrowForwardIos size="20px" />
			</button>
		</div>
	);
};

export default MonthFilter;
