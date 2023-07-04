import { ChangeEvent, FC } from "react";
import { formatInputValue } from "../../utils/formatInputValue";
import styles from "./Input.module.scss";

interface FormInputProps {
	type: "text" | "date";
	name: "amount" | "date";
	label: string;
	value: string | number;
	max?: string;
	onChange: (name: string, value: string | number) => void;
}

const FormInput: FC<FormInputProps> = ({ name, label, type, value, onChange, max }) => {
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

			<input
				className={`${styles.input} ${styles[`${name}-input`]}`}
				type={type}
				name={name}
				id={type}
				placeholder={label}
				value={value}
				onChange={handleInputChange}
				max={max}
			/>

			{name === "amount" && (
				<label
					htmlFor={type}
					className={styles.currency}>
					USD
				</label>
			)}
		</div>
	);
};

export default FormInput;
