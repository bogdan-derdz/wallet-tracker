import { useGetAllRecordsQuery } from "../services/api";
import { useAppSelector } from "./redux";
import { filterRecordsByMonth } from "../utils/filterBy";

import { categories } from "../data/categories";

interface expenseByCategory {
	category: string;
	total: number;
	color: string;
}

interface balanceTrend {
	month: string;
	balance: number;
}

const useStatistics = () => {
	const { data: records = [] } = useGetAllRecordsQuery();
	const { dateFilter } = useAppSelector((state) => state.filterSlice);
	const filteredRecords = filterRecordsByMonth(records, dateFilter);

	//* Total balance for all time
	const getTotalBalance = () => {
		return records.reduce((total, record) => {
			switch (record.type) {
				case "expense":
					return total - record.amount;
				case "income":
					return total + record.amount;
			}
		}, 0);
	};

	//* Getting total amount of expenses by category
	const getExpensesByCategory = () => {
		const expensesByCategory: expenseByCategory[] = [];

		filteredRecords.forEach((current) => {
			if (current.type === "expense") {
				const category = categories.find(
					(category) => category.id === current.category
				)!;

				const currentCategory = expensesByCategory.find(
					(item) => item.category === category.title
				);

				if (currentCategory) {
					return (currentCategory.total += current.amount);
				}

				return expensesByCategory.push({
					category: category.title,
					total: current.amount,
					color: category.color,
				});
			}
		});

		const labels = expensesByCategory.map((item) => item.category);
		const total = expensesByCategory.map((item) => item.total);
		const colors = expensesByCategory.map((item) => item.color);

		return { labels, total, colors };
	};

	//* Cash flow of current month
	const getCashFlowStat = () => {
		const expense = filteredRecords.reduce(
			(total, record) =>
				record.type === "expense" ? total + record.amount : total,
			0
		);

		const income = filteredRecords.reduce(
			(total, record) => (record.type === "income" ? total + record.amount : total),
			0
		);

		const flow = income - expense;
		const maxValue = Math.max(income, expense);

		return { expense, income, flow, maxValue };
	};

	//* Balance trend statistics from last 6 month
	const getBalanceTrend = () => {
		const arr: balanceTrend[] = [];

		records.forEach((current) => {
			const currentMonth = arr.find(
				(item) => item.month === current.date.slice(0, 7)
			)!;

			if (currentMonth) {
				return current.type === "expense"
					? (currentMonth.balance -= current.amount)
					: (currentMonth.balance += current.amount);
			}

			return arr.push({
				month: current.date.slice(0, 7),
				balance: current.type === "expense" ? -current.amount : current.amount,
			});
		});

		const balanceTrend = arr
			.sort((a, b) => {
				let da = new Date(a.month).getTime(),
					db = new Date(b.month).getTime();
				return da - db;
			})
			.slice(-6);

		const labels = balanceTrend.map((item) =>
			new Date(item.month).toLocaleString("default", {
				month: "short",
				year: "2-digit",
			})
		);
		const amounts = balanceTrend.map((item) => item.balance);

		return { labels, amounts };
	};

	//* Export
	return { getTotalBalance, getExpensesByCategory, getBalanceTrend, getCashFlowStat };
};

export default useStatistics;
