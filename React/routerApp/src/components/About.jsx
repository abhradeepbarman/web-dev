import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  function clickHandler() {
    //move to support page
    navigate("/support"); 
  }

  function backHandler() {
    //move back
    navigate(-1);
  }

  return (
    <>
      <div>
        This is about page
      </div>
      <br/>
      <button onClick={clickHandler}>Go to Support</button>
      <button onClick={backHandler} >Go Back</button>
    </>
  )
}

export default About
