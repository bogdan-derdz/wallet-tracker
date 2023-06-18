import { FC, useEffect } from "react";
import { createPortal } from "react-dom";

import { AiOutlineCloseCircle } from "react-icons/ai";

import styles from "./Modal.module.scss";

interface ModalProps {
	title: string;
	handleClose: () => void;
	children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ title, handleClose, children }) => {
	// Page scroll control
	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "";
		};
	}, []);

	// Creating modal conponent in body
	return createPortal(
		<div
			className={styles.wrapper}
			onClick={handleClose}>
			<div
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
			</div>
		</div>,
		document.body
	);
};

export default Modal;
