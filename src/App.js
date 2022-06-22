import './scss/style.scss';
import * as THREE from 'three';

import { Canvas, useFrame, extend, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useRef } from 'react';

extend({ OrbitControls });

// 드래그로(유저 이벤트)로 화면의 축을 변경할 수 있는 객체 리턴 함수
const Orbit = () => {
	const { camera, gl } = useThree();
	return <orbitControls args={[camera, gl.domElement]} />;
};

const Box = (props) => {
	const box = useRef(null);

	//useFrame은 화면 주사율에 맞게 프레임별로 정보값 제공
	//모션 작업을 하고 싶을 때 해당 오브제에 모션 작업 구문 주로 설정
	useFrame((state) => {
		box.current.rotation.x += 0.01;
		box.current.rotation.y += 0.01;
	});
	return (
		<mesh ref={box} {...props}>
			<boxBufferGeometry />
			<meshBasicMaterial color='hotpink' />
		</mesh>
	);
};

const Floor = (props) => {
	return (
		<mesh {...props}>
			<boxBufferGeometry args={[15, 0.1, 30]} />
			<meshPhysicalMaterial color='#fff' />
		</mesh>
	);
};

function App() {
	return (
		<section>
			<figure>
				{/* camera 위치값 [x, y, z] */}
				<Canvas style={{ background: '#000' }} camera={{ position: [3, 3, 3] }}>
					<ambientLight intensity={0.1} color='#fff' />
					{/* ambientLight: 빛의 방향이 없고 그림자를 생성하지 않음, color, intensity값 지정 가능, 해당 라이팅 영향을 받으려면 오브제에서 meshPhysicalMaterial 설정해야 함 */}
					<Box position={[1, 2, 0]} />
					<Floor position={[0, -0.05, 0]} />
					<Orbit />
					<axesHelper args={[5]} />
					{/* 가이드 축 보이게 함 */}
				</Canvas>
			</figure>
		</section>
	);
}

export default App;
