import { FC } from "react";
import Header from "./layouts/Header/Header";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

const App: FC = () => {
	return (
		<>
			<Header />
			<DashboardPage />
		</>
	);
};

export default App;
