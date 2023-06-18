import { FC } from "react";
import BalanceWidget from "../../features/widgets/BalanceWidget/BalanceWidget";
import RecordsWidget from "../../features/widgets/RecordsWidget/RecordsWidget";

const DashboardPage: FC = () => {
	return (
		<section className="container">
			<div className=" flex flex-wrap gap-[20px] w-full">
				<BalanceWidget />
				<RecordsWidget />
			</div>
		</section>
	);
};

export default DashboardPage;
