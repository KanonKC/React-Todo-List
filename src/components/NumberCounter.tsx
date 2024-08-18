import { useEffect, useState } from "react";
import "./NumberCounter.css";

interface NumberCounterProps {
	initialValue?: number;
	noColorOnEven?: boolean;
	step?: number;
	onIncrement?: (n?: number) => void;
}

const NumberCounter = ({
	initialValue = 0,
	noColorOnEven = false,
	step = 1,
	onIncrement = () => {},
}: NumberCounterProps) => {
	const [number, setNumber] = useState(initialValue);

	const handleIncrement = () => {
		setNumber(number + step);
		if (onIncrement) {
			onIncrement(number + step);
		}
	};

	const handleDecrement = () => {
		setNumber(number - step);
	};

	const customStyle = () => {
		if (number % 2 === 0 && !noColorOnEven) {
			return "even";
		} else {
			return "odd";
		}
	};

	useEffect(() => {
		console.log(initialValue);
	}, [initialValue]);

	return (
		<div>
			<h2 className={customStyle()}>{number}</h2>
			<button onClick={handleIncrement}>+</button>
			<button onClick={handleDecrement}>-</button>
		</div>
	);
};

export default NumberCounter;
