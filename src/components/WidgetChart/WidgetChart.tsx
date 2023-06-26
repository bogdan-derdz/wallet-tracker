import { FC } from "react";
import { Chart } from "react-chartjs-2";
import {
	Chart as ChartJS,
	ArcElement,
	ChartData,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Filler,
	ChartOptions,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Filler,
	ArcElement
);

interface WidgetChartProps {
	title: string;
	type: "doughnut" | "line";
	data: ChartData;
	width: string;
	height: string;
}

const options: ChartOptions = {
	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			usePointStyle: true,
			backgroundColor: "#ffffff",
			borderWidth: 1,
			borderColor: "#334155",
			titleColor: "#334155",
			bodyColor: "#334155",
			padding: 10,
		},
	},
};

const WidgetChart: FC<WidgetChartProps> = ({ title, type, data, height, width }) => {
	return (
		<div className="w-full flex flex-col gap-2 items-center">
			<p className="font-semibold text-xs text-gray-400 text-center">
				{title.toUpperCase()}
			</p>
			<div style={{ width, height }}>
				<Chart
					type={type}
					data={data}
					options={options}
				/>
			</div>
			<p className="font-medium text-xs text-gray-400 text-center">
				hover the chart to see detailed information
			</p>
		</div>
	);
};

export default WidgetChart;
