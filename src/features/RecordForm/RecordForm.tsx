import { FC, useEffect, useMemo, useState } from "react";
import { useCreateRecordMutation, useUpdateRecordMutation } from "../../services/api";
import { v4 as uuid } from "uuid";

import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import Select from "../../components/Select/Select";
import { AiFillCheckCircle } from "react-icons/ai";

import { categories } from "../../data/categories";
import { Record } from "../../types/record";
import styles from "./RecordForm.module.scss";

interface RecordFormProps {
	action: "create" | "edit";
	handleClose: () => void;
	record?: Record;
}

const RecordForm: FC<RecordFormProps> = ({ handleClose, record, action = "create" }) => {
	const [createRecord, {}] = useCreateRecordMutation();
	const [updateRecord, {}] = useUpdateRecordMutation();

	//* Form state
	const date = new Date().toISOString().split("T")[0];
	const uniqId = uuid().slice(0, 8);

	const [formData, setFormData] = useState<Record>({
		id: uniqId,
		type: "expense",
		category: "",
		amount: 0,
		date: date,
	});

	const category = categories.find((category) => category.id === formData.category, {});

	// Returns array with categories by type "expense" / "income" to make searching easier
	const TypedCategories = useMemo(() => {
		switch (formData.type) {
			case "expense":
				return categories.slice(0, 11);
			case "income":
				return categories.slice(-9);
		}
	}, [formData.type]);

	useEffect(() => {
		if (record) {
			setFormData(record);
		}
	}, []);

	//* Form change handler
	const handleChange = (name: string, value: string | number) => {
		setFormData((prevState) => {
			return { ...prevState, [name]: value };
		});
	};

	//* Form submit action handler
	const handleSubmit = async () => {
		switch (action) {
			case "create":
				await createRecord(formData);
				break;
			case "edit":
				await updateRecord(formData);
				break;
		}

		setTimeout(() => handleClose(), 200);
	};

	return (
		<form className={styles.container}>
			<div className={`${styles["type-container"]} ${styles[formData.type]}`}>
				<button
					onClick={() => handleChange("type", "expense")}
					className={`${styles.button} border-r-0 rounded-r-none ${
						formData.type === "expense" && styles.active
					}`}
					type="button">
					Expense
				</button>

				<button
					onClick={() => handleChange("type", "income")}
					className={`${styles.button} border-l-0 rounded-l-none ${
						formData.type === "income" && styles.active
					}`}
					type="button">
					Income
				</button>
			</div>

			<Select
				label="Category"
				selected={category}
				name="category"
				handleChange={handleChange}
				options={TypedCategories}
			/>

			<div className={styles.wrapper}>
				<FormInput
					label="Amount"
					type="amount"
					value={formData.amount}
					onChange={handleChange}
				/>

				<FormInput
					label="Date"
					type="date"
					max={date}
					value={formData.date}
					onChange={handleChange}
				/>
			</div>

			<Button onClick={handleSubmit}>
				<AiFillCheckCircle size="20px" />
				{action} record
			</Button>
		</form>
	);
};

export default RecordForm;
