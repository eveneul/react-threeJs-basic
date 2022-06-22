/* 

1. three.js => webGL 기반의 브라우저에서 3D 구현ㅇ르 쉽게 도와주는 라이브러리
(webGL: 웹 그래픽 라이브러리/Canvas 등)
2. react-three-fiber => 리액트에서 three.js를 보다 편하게 사용하기 위한 라이브러리

*/

import './scss/style.scss';
import * as THREE from 'three'; // three.js 불러오기

function App() {
	// 모델이 잘 출력되기 위한 scene(인스턴스) 설치
	const scene = new THREE.Scene();

	//원근감을 위한 카메라 인스턴스 생성 / 파라미터로 각도값(fov: field of view), 종횡비(가로 / 폭),near(얼마나 가까이 보게 할 건지, 0.1이 기본), far(얼마나 멀리까지 보게 할 건지, 2000이 기본)
	const camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);

	//화면 출력을 담당하는 렌더러 설정, 화면 크기도 설정해야 함
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	//모든 콘텐츠를 다 초기화시켜준 다음에
	document.body.innerHTML = '';

	//해당 신에 있는 domElement를 body에 출력하기 위함
	document.body.appendChild(renderer.domElement);

	return null;
}

export default App;
