import { FC } from "react";

import RecordList from "../../../components/RecordList/RecordList";
import WidgetLayout from "../../../layouts/WidgetLayout/WidgetLayout";

const RecordsWidget: FC = () => {
	return (
		<WidgetLayout title="Records">
			<RecordList />
		</WidgetLayout>
	);
};

export default RecordsWidget;
