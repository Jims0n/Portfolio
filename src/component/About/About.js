
import React, { useEffect, useState } from 'react'
import Navbar from "../Navbar/Navbar";
import AnimatedLetters from '../AnimatedLetters/Animate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngular, faHtml5, faCss3, faReact, faJsSquare, faGit } from '@fortawesome/free-brands-svg-icons';
import Loader from "react-loaders"
import "../About/About.scss"

const About = () => {

  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
   const timer = setTimeout(() => {
    setLetterClass("text-animate-hover")
  }, 3000)
  return () => clearTimeout(timer);
},[])

  return (
    <>
    <div>
    <Navbar />
    <div className="text-zone">
      <h1>
      <AnimatedLetters 
      letterClass={letterClass}
        strArray={['A','b','o','u','t',' ','m','e']}
        idx={15}
      />
      </h1>
      <p>
        I'm very ambitious Fullstack developer looking for a role in established IT company with the oppotunity
        to work with the latest technology on challenging and diverse projects.
      </p>
      <p>
        I'm quietly confident, naturally curious and perpetually working on improving my chops one design problem
        at a time
      </p>
    </div>

    <div className="stage-cube-cont">
<div className="cubespinner">
<div className="face1">
<FontAwesomeIcon icon={faAngular} color="#DD0031" />
</div>
<div className="face2">
<FontAwesomeIcon icon={faHtml5} color="#F06529" />
</div>
<div className="face3">
<FontAwesomeIcon icon={faCss3} color="#23A4D9" />
</div>
<div className="face4">
<FontAwesomeIcon icon={faReact} color="#5ED4F4" />
</div>
<div className="face5">
<FontAwesomeIcon icon={faGit} color="#EC4D2A" />
</div>
<div className="face6 ">
<FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
</div>
</div>
    </div>
    </div>
  <Loader type="pacman" />
  </>
  )
}

export default About