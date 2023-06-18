import { useEffect, useRef, useState } from "react";

export const useOutsideClick = (initialActive: boolean) => {
	const [active, setActive] = useState<boolean>(initialActive);

	const ref = useRef<HTMLUListElement>(null);

	const handleOutsideClick = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setActive(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	return { ref, active, setActive };
};
