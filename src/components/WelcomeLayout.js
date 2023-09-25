import React from 'react'
import './WelcomeLayout.scss';

import img from '../images/square-dot.svg';

export default function WelcomeLayout() {
  return (
	<div className="home">
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
				<img className="profile" src="https://avatars.githubusercontent.com/u/62292197?v=4" alt="avatar" />
			</div>
		</div>
	</div>
  )
}
