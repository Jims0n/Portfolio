import "./Home.scss"
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import {Link} from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters/Animate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {

const [letterClass, setLetterClass] = useState("text-animate")
const jobArray = ['I',"'m",' ','a',' ','w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
                  
useEffect(() => {
  const timer = setTimeout(() => {
   setLetterClass("text-animate-hover")
 }, 4000)
 return () => clearTimeout(timer);
},[])

  return (
    <div>
    <Navbar />
    <div className="containerr">
    <h1>
      <span className={letterClass}>H</span> 
      <span className={`${letterClass} _12`}>i,</span>
      <br /> 
      
      <AnimatedLetters 
        letterClass={letterClass}
        strArray={jobArray}
        idx={6}
      />
    </h1>
    <h2>Fullstack Developer/ Javascript Expert/ React</h2>
   
    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
    </div>
    

    <div className="linkGit">
    <ul>
      <li>
        <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/abdulateef-jimoh-194400246/"
        >
        <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
        </a>
      </li>

      <li>
        <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Jimson-Botterfly"
        >
        <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
        </a>
      </li>

    </ul>
    </div>
    
    </div>
  )
}

export default Home