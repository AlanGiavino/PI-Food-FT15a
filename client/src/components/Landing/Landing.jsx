import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'
import landingImg from '../../img/Landing.jpg'
import logo from '../../img/Logo Food.png'

export default function Landing() {
	return (
		<React.Fragment>
		<div className='brand-text-landing'>
		<img className='logo-container' src={logo}/>
			<img className='img-container' src={landingImg}/>
				<Link to='/recipes'>
					<button className='btn'>Bon Appetite!</button>
				</Link>
		</div>
		</React.Fragment>
	);
}