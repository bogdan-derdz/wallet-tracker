import { ChangeEvent, FC } from "react";

import styles from "./FormInput.module.scss";

interface FormInputProps {
	label: string;
	type: "amount" | "date";
	value: string | number;
	max?: string;
	onChange: (name: string, value: string | number) => void;
}

//Formatting input data to correct format
const formatInputValue = (name: string, value: string) => {
	const date = new Date().toISOString().split("T")[0];

	switch (name) {
		case "amount":
			const cleanedValue = value.replace(/[^0-9.]/g, "");
			return value ? cleanedValue : 0;
		case "date":
			if (!value) {
				return date;
			}
			return value > date ? date : value;

		default:
			return value;
	}
};

const FormInput: FC<FormInputProps> = ({ label, type, value, onChange, max }) => {
	// Input handling
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;

		const formattedValue = formatInputValue(name, value);

		onChange(name, formattedValue);
	};

	return (
		<div className={styles.container}>
			<label
				htmlFor={type}
				className={styles.label}>
				{label}
			</label>

			{type === "amount" && (
				<>
					<input
						className={`${styles.input} ${styles["amount-input"]}`}
						type="text"
						name={type}
						id={type}
						placeholder={label}
						value={value}
						onChange={handleInputChange}
					/>

					<label
						htmlFor={type}
						className={styles.currency}>
						USD
					</label>
				</>
			)}

			{type === "date" && (
				<input
					className={styles.input}
					type="date"
					name="date"
					value={value}
					max={max}
					onChange={handleInputChange}
				/>
			)}
		</div>
	);
};

export default FormInput;
