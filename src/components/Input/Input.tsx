import { ChangeEvent, FC } from "react";
import styles from "./Input.module.scss";

interface FormInputProps {
	type: "text" | "date";
	name: "amount" | "date";
	label: string;
	value: string | number;
	max?: string;
	onChange: (fieldName: string, fieldValue: string) => void;
	error?: boolean;
}

const FormInput: FC<FormInputProps> = ({
	name,
	label,
	type,
	value,
	onChange,
	max,
	error,
}) => {
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
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					onChange(name, e.currentTarget.value)
				}
				max={max}
			/>

			{name === "amount" && (
				<label
					htmlFor={type}
					className={styles.currency}>
					USD
				</label>
			)}

			{error && <p className="validation-error">amount cannot be empty</p>}
		</div>
	);
};

export default FormInput;
