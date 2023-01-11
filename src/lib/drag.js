import { spring } from 'svelte/motion';

export function drag(node, params) {
	let x;
	let y;

	const coordinates = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.2,
			damping: 0.4
		}
	);

	coordinates.subscribe(($coords) => {
		// in css, animations are most performant via transforms
		// translate3d is more performant than translate, uses the gpu
		node.style.transform = `translate3d(${$coords.x}px, ${$coords.y}px, 0)`;
	});

	node.addEventListener('mousedown', handleMouseDown);

	function handleMouseDown(event) {
		x = event.clientX;
		y = event.clientY;
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
	}

	function handleMouseMove(event) {
		// delta X -> distance from where we started to where we are
		const dx = event.clientX - x;
		const dy = event.clientY - y;
		x = event.clientX;
		y = event.clientY;
		coordinates.update(($coords) => {
			return {
				x: $coords.x + dx,
				y: $coords.y + dy
			};
		});
	}

	function handleMouseUp() {
		window.removeEventListener('mousemove', handleMouseMove);
		window.removeEventListener('mouseup', handleMouseUp);
		coordinates.update(() => {
			return {
				x: 0,
				y: 0
			};
		});
	}

	return {
		destroy() {
			node.removeEventListener('mousedown', () => console.log('click'));
		}
	};
}
