import './scss/style.scss';

import { Canvas } from 'react-three-fiber';

function App() {
	return (
		<section>
			<figure>
				<Canvas style={{ background: '#000' }}>
					<mesh>
						<boxBufferGeometry />
						<meshBasicMaterial color='hotpink' />
					</mesh>
				</Canvas>
			</figure>
		</section>
	);
}

export default App;
