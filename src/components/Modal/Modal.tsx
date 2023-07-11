import { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { entryAnimation } from "../../utils/motion";
import styles from "./Modal.module.scss";

interface ModalProps {
	title: string;
	handleClose: () => void;
	children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ title, handleClose, children }) => {
	//* Page scroll control
	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	//* Creating modal conponent in body by portal
	return createPortal(
		<motion.div
			variants={entryAnimation(0, 0, 0.4, 0)}
			initial="hidden"
			animate="show"
			exit="hidden"
			className={styles.wrapper}
			onClick={handleClose}>
			<motion.div
				variants={entryAnimation(0, "10%", 0.3, 0.3)}
				initial="hidden"
				animate="show"
				exit="hidden"
				className={styles.content}
				onClick={(e) => e.stopPropagation()}>
				<div className={styles.header}>
					<h3 className={styles.title}>{title}</h3>

					<AiOutlineCloseCircle
						onClick={handleClose}
						size="26px"
						className="inline-block cursor-pointer"
					/>
				</div>

				{children}
			</motion.div>
		</motion.div>,
		document.body
	);
};

export default Modal;
