import { useOutsideClick } from "../../hooks/useOutsideClick";
import styles from "./Select.module.scss";

//* Reusable interface for option element
interface option {
	id: string;
	color: string;
	title: string;
	icon: React.ReactElement;
	[key: string]: any;
}

//* type for reusable
type SelectProps<T> = {
	label: string;
	name: string;
	selected?: T;
	options: T[];
	handleChange: (name: string, value: string) => void;
};

const Select = <T extends option>(props: SelectProps<T>) => {
	const { options, handleChange, name, label, selected } = props;

	//* Connected hook for closing list of options by clicking outside of list
	const { active, ref, handleActive } = useOutsideClick(false);

	//* Handler for click on options
	const handleSelect = (option: option) => {
		handleChange(name, option.id);

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

				{active && (
					<ul className={styles.list}>
						{options.map((option) => (
							<li
								key={option.id}
								className={styles.option}
								onClick={(e) => {
									e.stopPropagation();
									handleSelect(option);
								}}>
								<span
									className={styles.icon}
									style={{ backgroundColor: option.color }}>
									{option.icon}
								</span>

								<span className={styles.title}>{option.title}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
};

export default Select;
