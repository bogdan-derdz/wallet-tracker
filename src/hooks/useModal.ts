import { useState } from "react";

// visability state hook
export const useModal = (): { active: boolean; toggleActive: () => void } => {
	const [active, setActive] = useState<boolean>(false);

	const toggleActive = () => setActive(!active);

	return { active, toggleActive };
};
