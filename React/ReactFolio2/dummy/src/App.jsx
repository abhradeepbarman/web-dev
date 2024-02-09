import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [text, setText] = useState('');


  //We use useEffect hook if we want to do some task after our UI gets rendered

  //variation 1 => Every Render
  // useEffect(() => {
  //   console.log("UI RENDERED");
  // });
  

  //variation 2 => First Render
  // useEffect(() => {
  //   console.log("UI RENDERED");
  // }, []);


  //variation 3 => on First render + whenever dependency changes
  // useEffect(() => {
  //   console.log("change observed");
  // }, [text]);
  
  
  //variation 4 => to handle unmounting of a component
  useEffect(() => {
    console.log("listener added");
  
    return () => {
      console.log("listener removed");
    }
  }, [text])
  



  function changeHandler(event) {
    setText(event.target.value)
    console.log(text);
  }

  return (
    <>
      <input type="text" onChange={changeHandler} />
    </>
  )
}

export default App
