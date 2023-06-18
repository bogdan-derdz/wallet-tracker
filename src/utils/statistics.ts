import { Record } from "../types/record";

export const getTotalBalance = (records: Record[]) => {
	const totalBalance = records.reduce((total, record) => {
		switch (record.type) {
			case "expense":
				return total - record.amount;
			case "income":
				return total + record.amount;
		}
	}, 0);

	return totalBalance;
};
