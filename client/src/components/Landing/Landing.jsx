import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
	return (
		<React.Fragment>
			<div className='background-container'>
				<div className='principal-container'>
					<div>
						<span className='brand-text-landing'>
								PI-FOODS
							</span>
					</div>
					<div className='info'>
						<p>Foods</p>
						<Link to='/recipes'>
							<button className='btn-info'>Bon Appetite!</button>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
