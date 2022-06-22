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

	// 상자가 빛을 받아 그림자 생성 -> castShadow, 자신으로 인해 바닥에 그림자 생성 -> receiveShadow 둘 다 적용
	return (
		<mesh ref={box} {...props} castShadow>
			<boxBufferGeometry />
			<meshPhysicalMaterial
				color='white'
				// metalness={2} // 메탈 효과
				roughness={0} // 거칠기
				clearcoat={1} // 표면 코팅
				// transparent
				opacity={0.6}
				transmission={0.9}
				reflectivity={3}
				side={THREE.DoubleSide}
				fog={false} //안개효과 제거
			/>
		</mesh>
	);
};

const Floor = (props) => {
	// 빛을 받아서 그림자를 출력만 하면 되어서 recieveShadow
	return (
		<mesh {...props} receiveShadow>
			<boxBufferGeometry args={[15, 0.1, 30]} />
			<meshPhysicalMaterial color='#fff' />
		</mesh>
	);
};

const Light = (props) => {
	const color = 'yellow';
	return (
		<mesh {...props}>
			<pointLight color={color} intensity={1} castShadow position={[0, 5, 0]} />
			{/* pointLight: 방향성을 가지고 그림자 생성, castShadow=>그림자 발생시킴 */}
			<sphereBufferGeometry args={[0.2, 20, 20]} />
			<meshPhysicalMaterial emissive={color} />
		</mesh>
	);
};

function App() {
	return (
		<section>
			<figure>
				{/* camera 위치값 [x, y, z] */}
				<Canvas
					style={{ background: '#000' }}
					camera={{ position: [3, 3, 3] }}
					shadowMap>
					<ambientLight intensity={0.3} color='#fff' />
					{/* ambientLight: 빛의 방향이 없고 그림자를 생성하지 않음, color, intensity값 지정 가능, 해당 라이팅 영향을 받으려면 오브제에서 meshPhysicalMaterial 설정해야 함 */}
					<Light position={[0, 2, 0]} />
					<Orbit />
					<axesHelper args={[5]} />
					<fog attach='fog' args={['#fff', 1, 10]} />
					<Box position={[0, 1, 0]} />
					<Floor position={[0, -0.05, 0]} />
					{/* 가이드 축 보이게 함 */}
				</Canvas>
			</figure>
		</section>
	);
}

export default App;
