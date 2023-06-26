import styles from "./Select.module.scss";
import { useOutsideClick } from "../../hooks/useOutsideClick";

interface option {
	id: string;
	color: string;
	title: string;
	icon: React.ReactElement;
}

type SelectProps<T> = {
	label: string;
	name: string;
	selected?: T;
	options: T[];
	handleChange: (name: string, value: string) => void;
};

const Select = <T extends option>(props: SelectProps<T>) => {
	const { options, handleChange, name, label, selected } = props;

	const { active, ref, handleActive } = useOutsideClick(false);

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
