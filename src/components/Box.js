import { useLoader } from 'react-three-fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { useBox } from 'use-cannon';

const Box = (props) => {
	const [ref, api] = useBox(() => ({ mass: 1, ...props }));
	const texture = useLoader(
		THREE.TextureLoader,
		`${process.env.PUBLIC_URL}/img/wood.jpg`
	);
	//useFrame은 화면 주사율에 맞게 프레임별로 정보값 제공
	//모션 작업을 하고 싶을 때 해당 오브제에 모션 작업 구문 주로 설정
	// useFrame((state) => {
	// 	box.current.rotation.x += 0.01;
	// 	box.current.rotation.y += 0.01;
	// });

	const handlePointerDown = (e) => {
		e.object.active = true;
		if (window.activeMesh) {
			if (window.activeMesh.uuid === e.object.uuid) return;

			window.activeMesh.active = false;
		}
		window.activeMesh = e.object;
	};

	// const handlePointerEnter = (e) => {
	// 	scaleUp(e.object);
	// };

	// const handlePointerLeave = (e) => {
	// 	if (e.object.active) return;
	// 	scaleDown(e.object);
	// };

	// const scaleUp = (object) => {
	// 	object.scale.x = 1.5;
	// 	object.scale.y = 1.5;
	// 	object.scale.z = 1.5;
	// };

	// const scaleDown = (object) => {
	// 	object.scale.x = 1;
	// 	object.scale.y = 1;
	// 	object.scale.z = 1;
	// };

	// 상자가 빛을 받아 그림자 생성 -> castShadow, 자신으로 인해 바닥에 그림자 생성 -> receiveShadow 둘 다 적용
	return (
		<mesh onPointerDown={handlePointerDown} ref={ref} {...props} castShadow>
			<boxBufferGeometry />
			<meshPhysicalMaterial map={texture} />
		</mesh>
	);
};

export default Box;
