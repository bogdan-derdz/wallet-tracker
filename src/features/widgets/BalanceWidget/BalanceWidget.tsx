import { FC } from "react";
import WidgetLayout from "../../../layouts/WidgetLayout/WidgetLayout";
import { getTotalBalance } from "../../../utils/statistics";
import { useGetAllRecordsQuery } from "../../../services/api";

const BalanceWidget: FC = () => {
	const { data: records } = useGetAllRecordsQuery();

	const totalBalance = records && getTotalBalance(records);

	return (
		<WidgetLayout title="Balance">
			<div>
				<p className="font-medium text-base text-slate-700">Total balance </p>
				<p className="font-semibold text-lg">
					{totalBalance} <span className="text-sm">USD</span>
				</p>
			</div>
		</WidgetLayout>
	);
};

export default BalanceWidget;
