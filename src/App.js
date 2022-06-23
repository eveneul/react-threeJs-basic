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
								intensity={0.5}
							/>
							<Suspense fallback={null}>
								<Box position={[-2, 3, 0]} />
							</Suspense>
							<Suspense fallback={null}>
								<Box position={[2, 3, 0]} />
							</Suspense>
						</Dragable>

						<Floor position={[0, -0.15, 0]} />

						<Suspense fallback={null}>
							<Background />
						</Suspense>
					</Physics>
				</Canvas>
			</figure>
		</section>
	);
}

export default App;
