import './scss/style.scss';

import { Canvas, useFrame } from 'react-three-fiber';
import { useRef } from 'react';

const Box = () => {
	const box = useRef(null);

	//useFrame은 화면 주사율에 맞게 프레임별로 정보값 제공
	//모션 작업을 하고 싶을 때 해당 오브제에 모션 작업 구문 주로 설정
	useFrame((state) => {
		box.current.rotation.x += 0.01;
		box.current.rotation.y += 0.01;
	});
	return (
		<mesh ref={box}>
			<boxBufferGeometry />
			<meshBasicMaterial color='hotpink' />
		</mesh>
	);
};

function App() {
	return (
		<section>
			<figure>
				<Canvas style={{ background: '#000' }}>
					<Box />
				</Canvas>
			</figure>
		</section>
	);
}

export default App;
