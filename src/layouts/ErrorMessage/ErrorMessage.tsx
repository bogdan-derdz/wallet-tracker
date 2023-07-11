import { FC } from "react";
import { BiError } from "react-icons/bi";

const ErrorMessage: FC = () => {
	return (
		<span className="font-bold text-lg text-red-500 flex gap-2 items-center self-center animate-pulse">
			something went wrong <BiError size={"32px"} />
		</span>
	);
};

export default ErrorMessage;
