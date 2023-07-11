import { useState } from "react";
import { Record } from "../types/record";

export const useValidation = () => {
	const [formErrors, setFormErrors] = useState({
		category: false,
		amount: false,
	});

	const resetValidation = (fieldName: string) => {
		setFormErrors((prevState) => ({ ...prevState, [fieldName]: false }));
	};

	const valitadeForm = (formData: Record) => {
		let isValid = true;

		for (let valueKey in formData) {
			if (!formData[valueKey as keyof Record]) {
				setFormErrors((prevState) => ({ ...prevState, [valueKey]: true }));
				isValid = false;
			}
		}

		return isValid;
	};

	return { valitadeForm, resetValidation, formErrors };
};
