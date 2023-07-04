import { FC } from "react";
import Header from "./features/Header/Header";
import BalanceWidget from "./features/widgets/BalanceWidget/BalanceWidget";
import CashFlowWidget from "./features/widgets/CashFlowWidget/CashFlowWidget";
import ExpensesWidget from "./features/widgets/ExpensesWidget/ExpensesWidget";
import IncomeWidgets from "./features/widgets/IncomeWidgets/IncomeWidgets";
import RecordsWidget from "./features/widgets/RecordsWidget/RecordsWidget";

const App: FC = () => {
	return (
		<>
			<Header />
			<section className="container">
				<div className=" flex flex-wrap gap-5 w-full pb-5">
					<BalanceWidget />
					<CashFlowWidget />
					<ExpensesWidget />
					<RecordsWidget />
					<IncomeWidgets />
				</div>
			</section>
		</>
	);
};

export default App;
