import { FC } from "react";
import { motion } from "framer-motion";
import { entryAnimation } from "../../utils/motion";
import styles from "./WidgetLayout.module.scss";

interface WidgetLayoutProps {
	title: string;
	children: React.ReactNode;
}

const WidgetLayout: FC<WidgetLayoutProps> = ({ title, children }) => {
	return (
		<motion.div
			variants={entryAnimation(0, "20%", 0.8, 0.4)}
			className={styles.wrapper}>
			<div className={styles.header}>
				<h3 className={styles.title}>{title}</h3>
			</div>

			<div className={styles.content}>{children}</div>
		</motion.div>
	);
};

export default WidgetLayout;
