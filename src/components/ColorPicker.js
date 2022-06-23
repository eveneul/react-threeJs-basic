import styled from 'styled-components';
import * as THREE from 'three';

const Wrapper = styled.ul`
	position: absolute;
	bottom: 50px;
	left: 50px;
	display: flex;
	z-index: 3;
	li {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #333;
		font-size: 12px;
		margin-right: 10px;
		cursor: pointer;
		color: #fff;
		font-weight: bold;
	}
`;

function ColorPicker() {
	const handleClick = (e) => {
		// 색상 패널 클릭 시 만약 전역에 등록된 오브젝트가 없으면 (선택된 요소가 없으면 종료)
		if (!window.activeMesh) return;

		//전역에 등록된 오브젝트를 불러와서 colorPicker에 선택된 색상으로 변경
		window.activeMesh.material.color = new THREE.Color(
			e.target.style.backgroundColor
		);
	};
	return (
		<Wrapper>
			{['red', 'blue', 'green', 'transpearent'].map((color) => {
				return (
					<li
						key={color}
						style={{ backgroundColor: color }}
						onClick={handleClick}>
						{color}
					</li>
				);
			})}
		</Wrapper>
	);
}

export default ColorPicker;
