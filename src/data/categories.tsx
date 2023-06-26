import { Category } from "../types/category";
import {
	MdFastfood,
	MdLocalTaxi,
	MdRestaurant,
	MdShoppingBag,
	MdDirectionsCar,
	MdSubscriptions,
	MdPerson,
	MdSell,
} from "react-icons/md";
import {
	RiMedicineBottleFill,
	RiStockFill,
	RiBankFill,
	RiRefund2Fill,
} from "react-icons/ri";
import {
	FaCoins,
	FaHome,
	FaSmoking,
	FaWallet,
	FaGift,
	FaMoneyBillWave,
} from "react-icons/fa";
import { GiReceiveMoney, GiHouseKeys } from "react-icons/gi";

export const categories: Category[] = [
	// Expense
	{
		id: "da018bba",
		title: "Food",
		color: "#84cc16",
		icon: <MdFastfood />,
	},
	{
		id: "b8e08fa2",
		title: "Restaurant & fast food",
		color: "#f97316",
		icon: <MdRestaurant />,
	},
	{
		id: "28822bd5",
		title: "Taxi & Public transport",
		color: "#fde047",
		icon: <MdLocalTaxi />,
	},
	{
		id: "867472f9",
		title: "Shopping",
		color: "#3b82f6",
		icon: <MdShoppingBag />,
	},
	{
		id: "719fa908",
		title: "Medicine",
		color: "#ef4444",
		icon: <RiMedicineBottleFill />,
	},
	{
		id: "ffa81ea9",
		title: "Car",
		color: "#6366f1",
		icon: <MdDirectionsCar />,
	},
	{
		id: "2935b075",
		title: "Taxes",
		color: "#14b8a6",
		icon: <FaCoins size="15px" />,
	},
	{
		id: "9f6d590e",
		title: "Home",
		color: "#facc15",
		icon: <FaHome />,
	},
	{
		id: "77991b48",
		title: "Subscriptions & media",
		color: "#f43f5e",
		icon: <MdSubscriptions />,
	},
	{
		id: "24ffabf3",
		title: "Life",
		color: "#22c55e",
		icon: <MdPerson />,
	},
	{
		id: "6e2c3d6f",
		title: "bad habits",
		color: "#c2410c",
		icon: <FaSmoking />,
	},
	// Income
	{
		id: "f40f4cf9",
		title: "Salary",
		color: "#ef4444",
		icon: <GiReceiveMoney />,
	},
	{
		id: "c412deb6",
		title: "Dividends & stock",
		color: "#f97316",
		icon: <RiStockFill />,
	},
	{
		id: "eb2ed115",
		title: "Sales",
		color: "#3b82f6",
		icon: <MdSell />,
	},
	{
		id: "bb71b4ce",
		title: "Rental earnings",
		color: "#fde047",
		icon: <GiHouseKeys />,
	},
	{
		id: "81af0847",
		title: "Loans & credits",
		color: "#22c55e",
		icon: <RiBankFill />,
	},
	{
		id: "9e73d8dc",
		title: "Refunds",
		color: "#14b8a6",
		icon: <RiRefund2Fill />,
	},
	{
		id: "9dabe97b",
		title: "Pocket money",
		color: "#6366f1",
		icon: <FaWallet />,
	},
	{
		id: "3a67034e",
		title: "Gifts",
		color: "#facc15",
		icon: <FaGift />,
	},
	{
		id: "e6babc28",
		title: "Other incomes",
		color: "#f43f5e",
		icon: <FaMoneyBillWave />,
	},
];
