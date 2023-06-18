import { FC } from "react";
import { useGetAllRecordsQuery } from "../../services/api";
import { Record } from "../../types/record";
import RecordItem from "../RecordItem/RecordItem";

import styles from "./RecordList.module.scss";
import Spinner from "../../layouts/Spinner/Spinner";
import ErrorMessage from "../../layouts/ErrorMessage/ErrorMessage";

const RecordList: FC = () => {
	const { data: records, isLoading, isError } = useGetAllRecordsQuery();

	const reverseArray = (records: Record[]) => {
		return [...records].reverse();
	};

	return (
		<ul className={styles.wrapper}>
			{isLoading && <Spinner />}
			{isError && <ErrorMessage />}

			{records &&
				reverseArray(records).map((record) => (
					<RecordItem
						key={record.id}
						record={record}
					/>
				))}
		</ul>
	);
};

export default RecordList;
