import React from 'react'
import img from '../images/square-dot.svg';
import './MainPage.scss';

export default function MainPage() {
	return (
	<div className="MainPage">
		<div className="background">
			<img src={img} alt="dots" />
			<div className="leftSide">
				<div className="name">
					Helena Masłowska
				</div>
				<div className="role">
					Frontend Developer
				</div>
			</div>
			<div className="rightSide">
				<img src="https://avatars.githubusercontent.com/u/62292197?v=4" alt="avatar" />
			</div>
		</div>
	</div>
	)
}
