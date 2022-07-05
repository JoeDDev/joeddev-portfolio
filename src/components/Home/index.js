import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetter from '../AnimatedLetters';
import './index.scss';


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['s','o','f','t','w','a','r','e',' ','d','e','v','e','l','o','p','e','r','.']
    
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi there<br/> I'm
                Jose David
                <br/>
                <AnimatedLetter 
                letterClass={letterClass} 
                strArray={nameArray}
                idx={19}
                />
                </h1>
                <h2>Python Developer / Pizza Lover / Linux</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div> 
    );
}

export default Home