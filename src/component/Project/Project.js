import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Project.scss"
import img1 from "../asset/Screenshot 2022-10-22 171715.png";
import img2 from "../asset/Screenshot 2022-11-24 232340.png";
import img3 from "../asset/Screenshot 2022-11-24 234542.png";



const Project = () => {
  return (
    <div>
    <Navbar />
    <div className='pImages'>
    <div>
    <a href='https://articulus.onrender.com/'>
    <img src={img1} alt='project1'/>
    </a>
    </div>
    <div>
    <a href='https://github.com/Jimson-Botterfly/Todolist'>
    <img src={img2} alt='project2'/>
    </a>

    </div>
    <div>
    <a href='https://github.com/Jimson-Botterfly/keeper-app'>
    <img src={img3} alt='project3'/>

    </a>

    </div>
    </div>
    
    </div>
  )
}

export default Project