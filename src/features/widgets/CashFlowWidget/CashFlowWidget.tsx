import { FC } from "react";
import useStatistics from "../../../hooks/useStatistics";

import ErrorMessage from "../../../layouts/ErrorMessage/ErrorMessage";
import Spinner from "../../../layouts/Spinner/Spinner";
import WidgetLayout from "../../../layouts/WidgetLayout/WidgetLayout";

import styles from "./CashFlowWidget.module.scss";

const CashFlowWidget: FC = () => {
	//* Statistics data
	const { getCashFlowStat, isError, isLoading, isSuccess } = useStatistics();
	const { expense, flow, income, maxValue } = getCashFlowStat();

	//* statistics bar width calculation func
	const calcBarWidth = (value: number) => {
		return maxValue > 0 ? ((100 / maxValue) * value).toFixed() : 0;
	};

	return (
		<WidgetLayout title="Cash Flow">
			{isLoading && <Spinner />}
			{isError && <ErrorMessage />}

			{isSuccess && (
				<>
					<div className="widget__container">
						<p className="title">This month</p>

						<p
							className={`amount  ${
								flow < 0 ? " bg-red-600 " : " bg-green-400"
							}`}>
							{flow}
							<span className="currency">USD</span>
						</p>
					</div>

					<div className={styles.item}>
						<div className={styles.type}>
							<p>Income</p>

							<p className={styles.total}>
								{income}
								<span className="currency">USD</span>
							</p>
						</div>

						<div className={styles["stat-bar"]}>
							<span
								className="bg-green-400"
								style={{
									width: `${calcBarWidth(income)}%`,
								}}></span>
						</div>
					</div>

					<div className={styles.item}>
						<div className={styles.type}>
							<p>Expense</p>

							<p className={styles.total}>
								{expense}
								<span className="currency">USD</span>
							</p>
						</div>

						<div className={styles["stat-bar"]}>
							<span
								className="bg-red-500"
								style={{
									width: `${calcBarWidth(expense)}%`,
								}}></span>
						</div>
					</div>
				</>
			)}
		</WidgetLayout>
	);
};

export default CashFlowWidget;
