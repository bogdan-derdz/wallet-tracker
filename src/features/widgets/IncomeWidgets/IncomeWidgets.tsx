import { FC } from "react";
import { ChartData } from "chart.js";
import useStatistics from "../../../hooks/useStatistics";
import WidgetLayout from "../../../layouts/WidgetLayout/WidgetLayout";
import WidgetChart from "../../../components/WidgetChart/WidgetChart";
import ErrorMessage from "../../../layouts/ErrorMessage/ErrorMessage";
import Spinner from "../../../layouts/Spinner/Spinner";

const IncomeWidgets: FC = () => {
	const { getIncomesByCategory, getCashFlowStat, isError, isLoading, isSuccess } =
		useStatistics();
	const { labels, total, colors } = getIncomesByCategory();
	const { income } = getCashFlowStat();

	const data: ChartData<"doughnut"> = {
		labels,
		datasets: [
			{
				label: "Total",
				data: total,
				backgroundColor: colors,
			},
		],
	};

	return (
		<WidgetLayout title="Incomes Structure">
			{isError && <ErrorMessage />}
			{isLoading && <Spinner />}

			{isSuccess && (
				<>
					<div className="widget__container">
						<p className="title">This month</p>

						<p className="amount bg-green-400">
							{income}
							<span className="currency">USD</span>
						</p>
					</div>

					<div className="w-full">
						<WidgetChart
							title="Incomes by categories"
							data={data}
							type="doughnut"
							width="180px"
							height=""
						/>
					</div>
				</>
			)}
		</WidgetLayout>
	);
};

export default IncomeWidgets;
