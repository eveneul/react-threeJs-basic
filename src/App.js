import './scss/style.scss';

import { Canvas, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Suspense } from 'react';
import { Physics } from 'use-cannon'; // 물리법칙 적용

import Orbit from './components/Orbit';
import ColorPicker from './components/ColorPicker';
import Box from './components/Box';
import Floor from './components/Floor';
import Background from './components/Background';
import Light from './components/Light';
import Dragable from './components/Dragable';
import CarModel from './components/CarModel';

extend({ OrbitControls });

function App() {
	return (
		<section>
			<figure>
				<ColorPicker />
				<Canvas
					style={{ background: '#000' }}
					camera={{ position: [7, 7, 7] }}
					shadowMap>
					<ambientLight intensity={0.3} color='#fff' />
					<Orbit />
					<axesHelper args={[5]} />

					<Physics>
						<Dragable>
							<Light
								position={[0, 2.5, 2]}
								show={true}
								color={'white'}
								intensity={1}
							/>
							<Light
								position={[0, 2.5, 2]}
								show={true}
								color={'white'}
								intensity={1}
							/>
							<Light
								position={[0, 2.5, 2]}
								show={true}
								color={'white'}
								intensity={1}
							/>

							{/* <Suspense fallback={null}>
								<Box position={[2, 3, 0]} />
							</Suspense> */}
						</Dragable>

						<Floor position={[0, -0.15, 0]} />

						<Suspense fallback={null}>
							<Background />
						</Suspense>
					</Physics>
					<Suspense fallback={null}>
						<CarModel
							path={`${process.env.PUBLIC_URL}/car/scene.gltf`}
							position={[-3, 0, 0]}
						/>
					</Suspense>
				</Canvas>
			</figure>
		</section>
	);
}

export default App;
