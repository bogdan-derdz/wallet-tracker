import { FC } from "react";
import styles from "./WidgetLayout.module.scss";
import { MdDragHandle } from "react-icons/md";

interface WidgetLayoutProps {
	title: string;
	children: React.ReactNode;
}

const WidgetLayout: FC<WidgetLayoutProps> = ({ title, children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h3 className={styles.title}>{title}</h3>
				<MdDragHandle
					size="20px"
					className="cursor-grab"
				/>
			</div>

			<div className={styles.content}>{children}</div>
		</div>
	);
};

export default WidgetLayout;
