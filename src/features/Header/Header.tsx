import { FC } from "react";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../hooks/useModal";
import styles from "./Header.module.scss";
import { AiFillDashboard, AiFillPlusCircle } from "react-icons/ai";
import RecordForm from "../../features/RecordForm/RecordForm";
import MonthFilter from "../../components/MonthFilter/MonthFilter";

const Header: FC = () => {
	const { active, toggleActive } = useModal();

	return (
		<>
			<header className="container">
				<div className={styles.wrapper}>
					<div className={styles.title}>
						<AiFillDashboard
							size="2rem"
							color="#0f172a"
						/>
						Dashboard
					</div>

					<MonthFilter />

					<Button onClick={toggleActive}>
						<AiFillPlusCircle size="20px" />
						New record
					</Button>
				</div>
			</header>

			{active && (
				<Modal
					title="Create Record"
					handleClose={toggleActive}>
					<RecordForm
						action="create"
						handleClose={toggleActive}
					/>
				</Modal>
			)}
		</>
	);
};

export default Header;
