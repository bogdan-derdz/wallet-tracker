import { ChangeEvent, FC } from "react";

import styles from "./FormInput.module.scss";

interface FormInputProps {
	label: string;
	type: "amount" | "date";
	value: string | number;
	max?: string;
	onChange: (name: string, value: string | number) => void;
}

const FormInput: FC<FormInputProps> = ({ label, type, value, onChange, max }) => {
	// Input handling
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		const formattedValue = type === "amount" ? Number(value) : value;

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
					<label
						htmlFor={type}
						className={styles.currency}>
						USD
					</label>

					<input
						className={`${styles.input} ${styles["amount-input"]}`}
						type="text"
						name={type}
						id={type}
						placeholder={label}
						value={value}
						onChange={handleInputChange}
					/>
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
