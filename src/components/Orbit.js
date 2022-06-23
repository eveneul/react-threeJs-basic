import { useThree } from 'react-three-fiber';

const Orbit = () => {
	const { camera, gl } = useThree();
	return <orbitControls args={[camera, gl.domElement]} />;
};

export default Orbit;
