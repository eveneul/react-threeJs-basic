import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function CarModel(props) {
	const model = useLoader(GLTFLoader, props.path);
	console.log(model);
	return <primitive object={model.scene} scale={new Array(3).fill(1.6)} />;
}

export default CarModel;
