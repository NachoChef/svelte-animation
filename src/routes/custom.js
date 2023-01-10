export function custom(node, { delay, duration }) {
	return {
		// t usually stands for time
		delay,
		css: (t) => {
			console.log('t', t);
			return `opacity: ${t}; transform: scale(${t})`;
		}
	};
}
