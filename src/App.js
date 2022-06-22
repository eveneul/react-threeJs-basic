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

function App() {
	return (
		<section>
			<figure>
				{/* camera 위치값 [x, y, z] */}
				<Canvas style={{ background: '#000' }} camera={{ position: [3, 3, 3] }}>
					{/* <Box position={[1, -1, 0]} /> */}
					<Orbit />
					<axesHelper args={[5]} />
					{/* 가이드 축 보이게 함 */}

					{/* 컴포넌트 이름에 따라서 렌더링 방식이 달라짐
					Points: 포트 생성
					line: 포인트를 선으로 연결
					mesh: 라인을 면으로 생성 */}

					<mesh>
						<meshBasicMaterial color='hotpink' side={THREE.DoubleSide} />
						<geometry>
							<face3 args={[0, 1, 2]} attachArray='faces' />
							<vector3 attachArray='vertices' args={[0, 2, 1]} />
							<vector3 attachArray='vertices' />
							<vector3 attachArray='vertices' args={[0, 1, -1]} />
						</geometry>
					</mesh>
				</Canvas>
			</figure>
		</section>
	);
}

export default App;
