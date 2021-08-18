import React from 'react';
import './About.css'

export default function About() {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='about'>
                    <h1>Henry-Food</h1>
                    <p>This project was created as part of my fullstack developer education at <a className='href-henry' href='https://www.soyhenry.com/' target='_blank' rel='noopener noreferrer'>Henry bootcamp</a>. In order to map all the different 
                    recipess food, this app consumes data from <a className='href-spoon' href='https://spoonacular.com/' target='_blank' rel='noopener noreferrer'>the food API</a>. It is also possible to create a new recipe food, entering a name, score, 
                    health score and instructions on how to prepare a delicious dish.</p>
                    <p>Any feedback you can provide will be greatly appreciated. Thank you, and don't forget to create your recipe food!</p>
                </div>
                <h1 className='tech-title'>Used technologies:</h1>
                <div className='tech-container'>
                    <div className='javascript'>
                        <img className='img-javascript' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                        <h1 className='text-javascript'>Javascript</h1>
                    </div>
                    <div className='html'>
                        <img className='img-html' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" />
                        <h1 className='text-html'>HTML</h1>
                    </div>
                    <div className='css'>
                        <img className='img-css' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" />
                        <h1 className='text-css'>CSS</h1>
                    </div>
                    <div className='react'>
                        <img className='img-react' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
                        <h1 className='text-react'>React</h1>
                    </div>
                    <div className='redux'>
                        <img className='img-redux' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="" />
                        <h1 className='text-redux'>Redux</h1>
                    </div>
                    <div className='express'>
                        <img className='img-express' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="" />
                        <h1 className='text-express'>Express</h1>
                    </div>
                    <div className='PostgreSQL'>
                        <img className='img-PostgreSQL' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="" />
                        <h1 className='text-PostgreSQL'>PostgreSQL</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
