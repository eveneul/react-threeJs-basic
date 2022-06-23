import { useBox } from 'use-cannon';

const Light = (props) => {
	const [ref, api] = useBox(() => ({ mass: 0, ...props }));

	if (props.show) {
		return (
			<mesh ref={ref} api={api} position={props.position}>
				<pointLight
					ref={ref}
					api={api}
					color={props.color}
					intensity={props.intensity}
					castShadow
				/>
				<sphereBufferGeometry args={[0.2, 20, 20]} />
				<meshPhysicalMaterial emissive={props.color} />
			</mesh>
		);
	} else {
		return (
			<mesh position={props.position}>
				<pointLight
					color={props.color}
					intensity={props.intensity}
					castShadow
				/>
			</mesh>
		);
	}
};

export default Light;
