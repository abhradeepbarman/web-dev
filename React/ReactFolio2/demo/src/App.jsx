import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
  
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  
    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
    };
  });

  return (
    <div>
      <h1>Screen Size : {width}px</h1>
    </div>
  )
}

export default App
