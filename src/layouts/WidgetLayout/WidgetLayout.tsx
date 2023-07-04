import { FC } from "react";
import styles from "./WidgetLayout.module.scss";

interface WidgetLayoutProps {
	title: string;
	children: React.ReactNode;
}

const WidgetLayout: FC<WidgetLayoutProps> = ({ title, children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h3 className={styles.title}>{title}</h3>
			</div>

			<div className={styles.content}>{children}</div>
		</div>
	);
};

export default WidgetLayout;
