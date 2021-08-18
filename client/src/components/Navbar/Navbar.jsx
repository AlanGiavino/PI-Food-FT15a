import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../../img/Logo Home.png'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className='logo'>
            <Link exact to="/" >
                <img src={Logo}/>
            </Link>
                </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <Link exact to="/recipes" >Explore Recipes</Link>
                        <Link exact to="/create" >Create a Recipe</Link>
                        <Link exact to="/about" >About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}