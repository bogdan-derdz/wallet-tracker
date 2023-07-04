import { FC } from "react";
import "./Button.scss";

interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button
			type="button"
			className="button"
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
