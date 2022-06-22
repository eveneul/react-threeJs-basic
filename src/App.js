import './scss/style.scss';

import { Canvas } from 'react-three-fiber';

const Box = () => {
	return (
		<mesh>
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
