import { FC, useEffect, useMemo, useState } from "react";
import { useCreateRecordMutation, useUpdateRecordMutation } from "../../services/api";
import { v4 as uuid } from "uuid";
import { formatInputValue } from "../../utils/formatInputValue";
import { useValidation } from "../../hooks/useValidation";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
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

	//* Form data
	const currentDate = new Date().toISOString().split("T")[0];
	const uniqId = uuid().slice(0, 8);

	const [recordData, setRecordData] = useState<Record>({
		id: uniqId,
		type: "expense",
		category: "",
		amount: 0,
		date: currentDate,
	});

	//* Validation hook
	const { formErrors, resetValidation, valitadeForm } = useValidation();

	useEffect(() => {
		record && setRecordData(record);
	}, []);

	const handleChange = (fieldName: string, fieldValue: string) => {
		resetValidation(fieldName);

		if (fieldName === "type") {
			setRecordData((prevData) => ({ ...prevData, category: "" }));
		}

		const formattedValue = formatInputValue(fieldName, fieldValue);

		setRecordData((prevData) => ({ ...prevData, [fieldName]: formattedValue }));
	};

	//* Current category data
	const category = categories.find((item) => item.id === recordData.category, {});

	//* Categories sorted by record type
	const CategoriesByType = useMemo(() => {
		switch (recordData.type) {
			case "expense":
				return categories.slice(0, 11);
			case "income":
				return categories.slice(-9);
		}
	}, [recordData.type]);

	const handleSubmit = async () => {
		if (valitadeForm(recordData)) {
			const amount = Number(recordData.amount);
			switch (action) {
				case "create":
					await createRecord({
						...recordData,
						amount,
					});
					break;
				case "edit":
					await updateRecord({
						...recordData,
						amount,
					});
					break;
			}

			setTimeout(() => handleClose(), 200);
		}
	};

	return (
		<form className={styles.container}>
			<div className={`${styles["type-container"]} ${styles[recordData.type]}`}>
				<button
					onClick={() => handleChange("type", "expense")}
					className={`${styles.button} border-r-0 rounded-r-none ${
						recordData.type === "expense" && styles.active
					}`}
					type="button">
					Expense
				</button>

				<button
					onClick={() => handleChange("type", "income")}
					className={`${styles.button} border-l-0 rounded-l-none ${
						recordData.type === "income" && styles.active
					}`}
					type="button">
					Income
				</button>
			</div>

			<Select
				label="Category"
				selected={category}
				name="category"
				onChange={handleChange}
				options={CategoriesByType}
				error={formErrors.category}
			/>

			<div className={styles.wrapper}>
				<Input
					name="amount"
					label="Amount"
					type="text"
					value={recordData.amount}
					onChange={handleChange}
					error={formErrors.amount}
				/>

				<Input
					name="date"
					label="Date"
					type="date"
					max={currentDate}
					value={recordData.date}
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
