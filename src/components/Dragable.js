import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { extend, useThree } from 'react-three-fiber';
import { useEffect, useRef, useState } from 'react';

extend({ DragControls });

function Dragable(props) {
	const { camera, gl } = useThree();
	const groupRef = useRef(null);
	const [children, setChildren] = useState([]);

	useEffect(() => {
		setChildren(groupRef.current.children);
	});
	return (
		<group ref={groupRef}>
			<dragControls args={[children, camera, gl.domElement]} />
			{props.children}
		</group>
	);
}

export default Dragable;
