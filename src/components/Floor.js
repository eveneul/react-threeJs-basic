import { useBox } from 'use-cannon';
//박스 형태의 물체에게 물리법칙을 적용
// 원 같은 경우에는 탱탱볼처럼 튈 수 있지만 박스는 그렇지 않음

const Floor = (props) => {
	// 빛을 받아서 그림자를 출력만 하면 되어서 recieveShadow

	const [ref, api] = useBox(() => ({ ...props }));
	return (
		<mesh {...props} ref={ref} receiveShadow>
			<boxBufferGeometry args={[15, 0.3, 30]} />
			<meshPhysicalMaterial color='#fff' />
		</mesh>
	);
};

export default Floor;
