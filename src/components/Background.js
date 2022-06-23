import * as THREE from 'three';
import { useThree, useLoader } from 'react-three-fiber';

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

export default Background;
