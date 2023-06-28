import { FC } from "react";
import { ChartData } from "chart.js";
import useStatistics from "../../../hooks/useStatistics";

import WidgetLayout from "../../../layouts/WidgetLayout/WidgetLayout";
import WidgetChart from "../../../components/WidgetChart/WidgetChart";
import ErrorMessage from "../../../layouts/ErrorMessage/ErrorMessage";
import Spinner from "../../../layouts/Spinner/Spinner";

import styles from "./BalanceWidget.module.scss";

const BalanceWidget: FC = () => {
	const { getTotalBalance, getBalanceTrend, isError, isLoading, isSuccess } =
		useStatistics();
	const totalBalance = getTotalBalance();
	const { amounts, labels } = getBalanceTrend();

	const data: ChartData<"line"> = {
		labels,
		datasets: [
			{
				label: "Balance",
				data: amounts,
				backgroundColor: "rgba(96, 165, 250, 0.2)",
				borderColor: "#60a5fa",
				pointBorderColor: "#3b82f6",
				pointBackgroundColor: "#3b82f6",
				fill: true,
				borderWidth: 3,
			},
		],
	};

	return (
		<WidgetLayout title="Balance">
			{isLoading && <Spinner />}
			{isError && <ErrorMessage />}

			{isSuccess && (
				<>
					<div className={styles.container}>
						<p className={styles.title}>This month</p>
						<p
							className={`${styles.amount}  ${
								totalBalance < 0 ? " bg-red-500 " : " bg-green-400"
							}`}>
							{totalBalance}
							<span className={styles.currency}>USD</span>
						</p>
					</div>
					<WidgetChart
						title="Last 6 month trend"
						data={data}
						type="line"
						width="100%"
						height=""
					/>
				</>
			)}
		</WidgetLayout>
	);
};

export default BalanceWidget;
