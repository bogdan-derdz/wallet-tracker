import { FC } from "react";
import Header from "./features/Header/Header";
import Widgets from "./features/widgets/Widgets";

const App: FC = () => {
	return (
		<>
			<Header />
			<Widgets />
		</>
	);
};

export default App;
