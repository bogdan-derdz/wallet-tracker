import { FC } from "react";
import { useDeleteRecordMutation } from "../../services/api";
import { useModal } from "../../hooks/useModal";

import Modal from "../Modal/Modal";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import RecordForm from "../../features/RecordForm/RecordForm";

import { Record } from "../../types/record";
import { categories } from "../../data/categories";
import styles from "./RecordItem.module.scss";

interface RecordItemProps {
	record: Record;
}

const RecordItem: FC<RecordItemProps> = ({ record }) => {
	const { active, toggleActive } = useModal();
	const [deleteRecord, {}] = useDeleteRecordMutation();

	const category = categories.find((category) => category.id === record.category)!;

	//* Styles for amount dependent on record type
	const typeStyles =
		record.type === "expense"
			? { bg: "text-red-600", sign: "-" }
			: { bg: "text-green-400", sign: "" };

	//* Correct date format
	const currentDate = new Date().toLocaleDateString();
	const date = new Date(record.date).toLocaleDateString();

	//* Handling delete record action
	const handleDelete = () => {
		const deleteConfirm = window.confirm(`Are you sure want to delete record?`);

		if (deleteConfirm) {
			deleteRecord(record);
		}
	};
	return (
		<>
			<li className={styles.wrapper}>
				<span
					className={styles["category-icon"]}
					style={{ backgroundColor: category.color }}>
					{category.icon}
				</span>

				<div className={styles.content}>
					<p className={styles.category}>{category.title}</p>
				</div>

				<div className={styles.tools}>
					<button onClick={toggleActive}>
						<FaEdit size="18px" />
					</button>

					<button onClick={() => handleDelete()}>
						<FaTrashAlt size="16px" />
					</button>
				</div>

				<div className={`${styles.content} items-end ml-auto`}>
					<p className={`font-semibold text-sm ${typeStyles.bg}`}>
						{`${typeStyles.sign}${record.amount}`}
						<span className={styles.currency}>USD</span>
					</p>

					<p className="text-xs">{`${
						date === currentDate ? "Today" : date
					}`}</p>
				</div>
			</li>

			{active && (
				<Modal
					title={`Edit record`}
					handleClose={toggleActive}>
					<RecordForm
						action="edit"
						record={record}
						handleClose={toggleActive}
					/>
				</Modal>
			)}
		</>
	);
};

export default RecordItem;
