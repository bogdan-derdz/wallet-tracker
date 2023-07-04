import { FC } from "react";
import { ChartData } from "chart.js";
import useStatistics from "../../../hooks/useStatistics";
import WidgetLayout from "../../../layouts/WidgetLayout/WidgetLayout";
import WidgetChart from "../../../components/WidgetChart/WidgetChart";
import ErrorMessage from "../../../layouts/ErrorMessage/ErrorMessage";
import Spinner from "../../../layouts/Spinner/Spinner";

const ExpensesWidget: FC = () => {
	const { getExpensesByCategory, getCashFlowStat, isError, isLoading, isSuccess } =
		useStatistics();
	const { labels, total, colors } = getExpensesByCategory();
	const { expense } = getCashFlowStat();

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
		<WidgetLayout title="Expenses Structure">
			{isLoading && <Spinner />}
			{isError && <ErrorMessage />}

			{isSuccess && (
				<>
					<div className="widget__container">
						<p className="title">This month</p>
						<p className="amount bg-red-500">
							-{expense}
							<span className="currency">USD</span>
						</p>
					</div>
					<div className="w-full">
						<WidgetChart
							title="Expenses by categories"
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

export default ExpensesWidget;
