//* Formatting input data to correct format
export const formatInputValue = (name: string, value: string) => {
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
