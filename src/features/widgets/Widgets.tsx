import { motion } from "framer-motion";
import { wrapperAnimation } from "../../utils/motion";
import BalanceWidget from "./BalanceWidget/BalanceWidget";
import CashFlowWidget from "./CashFlowWidget/CashFlowWidget";
import ExpensesWidget from "./ExpensesWidget/ExpensesWidget";
import IncomeWidgets from "./IncomeWidgets/IncomeWidgets";
import RecordsWidget from "./RecordsWidget/RecordsWidget";

const Widgets = () => (
	<section className="container">
		<motion.div
			variants={wrapperAnimation(0.1, 0.5)}
			initial="hidden"
			animate="show"
			className="flex flex-wrap gap-5 w-full pb-5">
			<BalanceWidget />
			<CashFlowWidget />
			<ExpensesWidget />
			<RecordsWidget />
			<IncomeWidgets />
		</motion.div>
	</section>
);

export default Widgets;
