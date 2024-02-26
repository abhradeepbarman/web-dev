import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
  const navigate = useNavigate();

  function clickHandler() {
    //move to about page
    navigate("/about")
  }

  return (
    <div>
      <div>
          This is Labs page
      </div>
      <br/>
      <div>
          <button onClick={clickHandler}>Move to About page</button>
      </div>      
    </div>
  )
}

export default Labs
