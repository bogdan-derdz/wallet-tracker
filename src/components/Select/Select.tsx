import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { entryAnimation, wrapperAnimation } from "../../utils/motion";
import styles from "./Select.module.scss";

//* Options
interface option {
	id: string;
	color: string;
	title: string;
	icon: React.ReactElement;
	[key: string]: any;
}

//* Props
type SelectProps<T> = {
	label: string;
	name: string;
	selected?: T;
	options: T[];
	onChange: (fieldName: string, fieldValue: string) => void;
	error: boolean;
};

const Select = <T extends option>(props: SelectProps<T>) => {
	const { options, onChange, name, label, selected, error } = props;

	//* hook for closing list of options by clicking outside of list
	const { active, ref, handleActive } = useOutsideClick(false);

	//* Option selection handler
	const handleSelect = (value: string) => {
		onChange(name, value);
		handleActive();
	};

	return (
		<>
			<div
				className={styles.container}
				ref={ref}>
				<label className={styles.label}>{label}</label>

				<div
					className={styles.wrapper}
					onClick={() => handleActive()}>
					<span
						className={styles.icon}
						style={{
							backgroundColor: selected ? selected.color : "#ef4444",
						}}>
						{selected && selected.icon}
					</span>

					<span className={styles.title}>
						{selected ? selected.title : "Required"}
					</span>
				</div>

				<AnimatePresence>
					{active && (
						<motion.ul
							variants={wrapperAnimation(0.07, 0.15, "0%", "210px")}
							initial="hidden"
							animate="show"
							exit="hidden"
							className={styles.list}>
							{options.map((option) => (
								<motion.li
									variants={entryAnimation("-50%", 0, 0.3, 0.2)}
									value={option.id}
									key={option.id}
									className={styles.option}
									onClick={(e) => {
										e.stopPropagation();
										handleSelect(option.id);
									}}>
									<span
										className={styles.icon}
										style={{ backgroundColor: option.color }}>
										{option.icon}
									</span>

									<span className={styles.title}>{option.title}</span>
								</motion.li>
							))}
						</motion.ul>
					)}
				</AnimatePresence>

				{error && <p className="validation-error">please select category</p>}
			</div>
		</>
	);
};

export default Select;
