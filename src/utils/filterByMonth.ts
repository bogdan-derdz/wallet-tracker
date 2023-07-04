import { Record } from "../types/record";

export const filterRecordsByMonth = (records: Record[], date: string) => {
	return records.filter((record) => record.date.slice(0, 7) === date).reverse();
};
