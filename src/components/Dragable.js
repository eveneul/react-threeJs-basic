import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { extend, useThree } from 'react-three-fiber';
import { useRef } from 'react';

extend({ DragControls });

function Dragable(props) {
	const groupRef = useRef(null);
	return <group ref={groupRef}>{props.children}</group>;
}

export default Dragable;
