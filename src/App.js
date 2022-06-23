import './scss/style.scss';

import { Canvas, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Suspense } from 'react';

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
					<Dragable>
						<Light
							position={[0, 2.5, 2]}
							show={true}
							color={'blue'}
							intensity={0.5}
						/>

						<Suspense fallback={null}>
							<Box position={[-2, 1.5, 0]} />
						</Suspense>
						<Suspense fallback={null}>
							<Box position={[2, 1.5, 0]} />
						</Suspense>
					</Dragable>

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
