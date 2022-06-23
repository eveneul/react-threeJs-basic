import './scss/style.scss';
import * as THREE from 'three';

import {
	Canvas,
	useFrame,
	extend,
	useThree,
	useLoader,
} from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useRef, Suspense } from 'react';
// Suspense: React component 안쪽에 비동기로 실행이 돼서 오류가 날만한 구문을 동기화 시켜 줌

extend({ OrbitControls });

// 드래그로(유저 이벤트)로 화면의 축을 변경할 수 있는 객체 리턴 함수
const Orbit = () => {
	const { camera, gl } = useThree();
	return <orbitControls args={[camera, gl.domElement]} />;
};

const Box = (props) => {
	const box = useRef(null);
	const texture = useLoader(
		THREE.TextureLoader,
		`${process.env.PUBLIC_URL}/img/wood.jpg`
	);
	//useFrame은 화면 주사율에 맞게 프레임별로 정보값 제공
	//모션 작업을 하고 싶을 때 해당 오브제에 모션 작업 구문 주로 설정
	useFrame((state) => {
		box.current.rotation.x += 0.01;
		box.current.rotation.y += 0.01;
	});

	const handlePointerDown = (e) => {
		console.log(e.object);
	};

	const handlePointerEnter = (e) => {
		e.object.scale.x = 1.5;
		e.object.scale.y = 1.5;
		e.object.scale.z = 1.5;
	};

	const handlePointerLeave = (e) => {
		e.object.scale.x = 1;
		e.object.scale.y = 1;
		e.object.scale.z = 1;
	};

	// 상자가 빛을 받아 그림자 생성 -> castShadow, 자신으로 인해 바닥에 그림자 생성 -> receiveShadow 둘 다 적용
	return (
		<mesh
			onPointerDown={handlePointerDown}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handlePointerLeave}
			ref={box}
			{...props}
			castShadow>
			<boxBufferGeometry />
			<meshPhysicalMaterial map={texture} />
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

const Background = (props) => {
	const texture = useLoader(
		THREE.TextureLoader,
		`${process.env.PUBLIC_URL}/img/landscape.webp`
	);
	const { gl } = useThree();
	const formatted = new THREE.WebGLCubeRenderTarget(
		texture.image.height
	).fromEquirectangularTexture(gl, texture);
	return <primitive attach='background' object={formatted} />;
};

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

function App() {
	return (
		<section>
			<figure>
				{/* camera 위치값 [x, y, z] */}
				<Canvas
					style={{ background: '#000' }}
					camera={{ position: [7, 7, 7] }}
					shadowMap>
					<ambientLight intensity={0.3} color='#fff' />
					{/* ambientLight: 빛의 방향이 없고 그림자를 생성하지 않음, color, intensity값 지정 가능, 해당 라이팅 영향을 받으려면 오브제에서 meshPhysicalMaterial 설정해야 함 */}
					<Light position={[0, 2, 0]} show={true} />
					<Light
						position={[0, 2.5, 2]}
						show={true}
						color={'blue'}
						intensity={0.5}
					/>
					<Orbit />
					<axesHelper args={[5]} />
					<Suspense fallback={null}>
						<Box position={[-2, 1.5, 0]} />
					</Suspense>
					<Suspense fallback={null}>
						<Box position={[2, 1.5, 0]} />
					</Suspense>
					<Floor position={[0, -0.1, 0]} />

					<Suspense fallback={null}>
						<Background />
					</Suspense>
				</Canvas>
			</figure>
		</section>
	);
}

export default App;
