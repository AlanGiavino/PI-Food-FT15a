import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'
import landingImg from '../../img/Landing.jpg'
import logo from '../../img/LogoFood.png'

export default function Landing() {
	return (
		<React.Fragment>
			<div className='brand-text-landing'>
				<img className='img-container' src={landingImg} />
				<img className='logo-container' src={logo} />
				<Link to='/recipes'>
					<button className='btn'>Bon Appetite!</button>
				</Link>
			</div>
		</React.Fragment>
	);
}