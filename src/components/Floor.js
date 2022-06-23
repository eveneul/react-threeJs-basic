const Floor = (props) => {
	// 빛을 받아서 그림자를 출력만 하면 되어서 recieveShadow
	return (
		<mesh {...props} receiveShadow>
			<boxBufferGeometry args={[15, 0.1, 30]} />
			<meshPhysicalMaterial color='#fff' />
		</mesh>
	);
};

export default Floor;
