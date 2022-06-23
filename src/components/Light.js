const Light = (props) => {
	if (props.show) {
		return (
			<mesh position={props.position}>
				<pointLight
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
