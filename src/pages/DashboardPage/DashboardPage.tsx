import { FC } from "react";
import BalanceWidget from "../../features/widgets/BalanceWidget/BalanceWidget";
import RecordsWidget from "../../features/widgets/RecordsWidget/RecordsWidget";
import ExpensesWidget from "../../features/widgets/ExpensesWidget/ExpensesWidget";
import CashFlowWidget from "../../features/widgets/CashFlowWidget/CashFlowWidget";

const DashboardPage: FC = () => {
	return (
		<section className="container">
			<div className=" flex flex-wrap gap-5 w-full pb-5">
				<BalanceWidget />
				<CashFlowWidget />
				<ExpensesWidget />
				<RecordsWidget />
			</div>
		</section>
	);
};

export default DashboardPage;
