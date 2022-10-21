import React, { useState, useEffect, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters/Animate'
import Navbar from '../Navbar/Navbar'
import "./Contact.scss"
import emailjs from "@emailjs/browser";

const Contact = () => {
const [letterClass, setLetterClass] = useState("text-animate");

const refForm = useRef()

useEffect(() => {
  const timer = setTimeout(() => {
   setLetterClass("text-animate-hover")
 }, 3000)
 return () => clearTimeout(timer);
},[])

const sendEmail = (e) => {
  e.preventDefault()
  emailjs.sendForm(
    "service_22ncyyc",
    "template_0w0y6ut",
    refForm.current,
    "AIcnfMEBtKD1qXykv"
  )
  .then(
    () => {
      alert("Message successfully sent!")
      window.location.reload(false)
    },
    (error) => {
      alert("Failed to send the message, please try again")
      console.log(error);
    }
  )
}


  return (
    <div>
    <Navbar />
    <div className="container">
<h1>
  <AnimatedLetters 
  letterClass={letterClass}
  strArray={['C','o','n','t','a','c','t',' ','m','e']} 
    idx={15}
  />
</h1>
<p>
  Hi I'm Jimoh Abdulateef, I'm interested in freelance oppotunities - especially ambitious or large projects. However
  if you have other request don't hesitate to contact me using below form
</p>
<div className='contact-form'>
  <form ref={refForm} onSubmit={sendEmail}>
    <div className='half'>
    <input 
    type="text" 
    name='name' 
    placeholder='Name' 
    required
    />
    </div>
<div className='half'>
<input 
type="email" 
name='email' 
placeholder='Email'
 required/>
</div>
<div>
<input type="text" name='subject' placeholder='Subject' required/>
</div>
<div>
  <textarea
    placeholder="Message"
    name="message"
    required
  />
</div>
<div>
  <input type="submit" className='flat-button' value="SEND"/>
</div>
    
  </form>
</div>
    </div>
    </div>
  )
}

export default Contact