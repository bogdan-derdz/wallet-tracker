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

const Select = <T extends option>({
	options,
	handleChange,
	name,
	label,
	selected,
}: SelectProps<T>) => {
	const { active, ref, setActive } = useOutsideClick(false);

	const handleSelect = (option: option) => {
		handleChange(name, option.id);

		setActive(!active);
	};

	return (
		<>
			<div className={styles.container}>
				<label className={styles.label}>{label}</label>

				<div
					className={styles.wrapper}
					onClick={() => setActive(!active)}>
					<span
						className={`${styles.icon} ${
							selected ? selected.color : "bg-red-500"
						}`}>
						{selected && selected.icon}
					</span>

					<span className={styles.title}>
						{selected ? selected.title : "Required"}
					</span>
				</div>

				{active && (
					<ul
						className={styles.list}
						ref={ref}>
						{options.map((option) => (
							<li
								key={option.id}
								className={styles.option}
								onClick={() => handleSelect(option)}>
								<span className={`${styles.icon} ${option.color}`}>
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
