import { FC } from "react";
import { ChartData } from "chart.js";
import useStatistics from "../../../hooks/useStatistics";
import WidgetLayout from "../../../layouts/WidgetLayout/WidgetLayout";
import WidgetChart from "../../../components/WidgetChart/WidgetChart";
import ErrorMessage from "../../../layouts/ErrorMessage/ErrorMessage";
import Spinner from "../../../layouts/Spinner/Spinner";

const BalanceWidget: FC = () => {
	//* Statistics data
	const { getTotalBalance, getBalanceTrend, isError, isLoading, isSuccess } =
		useStatistics();

	const totalBalance = getTotalBalance();
	const { amounts, labels } = getBalanceTrend();

	//* Chart data object for component
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
					<div className="widget__container">
						<p className="title">Total balance</p>
						<p
							className={`amount ${
								totalBalance < 0 ? " bg-red-500 " : " bg-green-400"
							}`}>
							{totalBalance}
							<span className="currency">USD</span>
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
