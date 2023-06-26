import { FC } from "react";
import { ChartData } from "chart.js";
import useStatistics from "../../../hooks/useStatistics";
import WidgetLayout from "../../../layouts/WidgetLayout/WidgetLayout";
import WidgetChart from "../../../components/WidgetChart/WidgetChart";

import styles from "./ExpensesWidget.module.scss";

const ExpensesWidget: FC = () => {
	const { getExpensesByCategory, getCashFlowStat } = useStatistics();
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
			<div className={styles.container}>
				<p className={styles.title}>This month</p>
				<p className={styles.amount}>
					-{expense}
					<span className={styles.currency}>USD</span>
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
		</WidgetLayout>
	);
};

export default ExpensesWidget;
