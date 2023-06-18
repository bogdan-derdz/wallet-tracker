import { Category } from "../types/category";
import { MdFastfood, MdLocalTaxi, MdDirectionsBus } from "react-icons/md";

export const categories: Category[] = [
	{
		id: "da018bba",
		title: "Food",
		color: "bg-orange-500",
		icon: <MdFastfood />,
	},
	{
		id: "28822bd5",
		title: "Taxi",
		color: "bg-yellow-500",
		icon: <MdLocalTaxi />,
	},
	{
		id: "867472f9",
		title: "Public transport",
		color: "bg-blue-500",
		icon: <MdDirectionsBus />,
	},
];
