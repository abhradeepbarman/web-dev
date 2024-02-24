import { useState } from "react";

function App() {

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  // function changeFirstNameHandler(e) {
  //   // console.log(e.target.value);
  //   setFirstName(e.target.value);
  // }

  // function changeLastNameHandler(e) {
  //   // console.log(e.target.value);
  //   setLastName(e.target.value);
  // }

  const [formData, setFormData] = useState( {
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: false,
    mode: "",
    country: "",
  } )

  function changeHandler(event) {

    const {name, value, checked, type} =  event.target

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    //print
    console.log("form data: ", formData)
  }

  return (
    <div>

      <form action="" onSubmit={submitHandler}>
        <input type="text" 
          placeholder="first name" 
          onChange={changeHandler} 
          name="firstName" 
          value={formData.firstName}
          /> 
        <br/> <br/>

        <input type="text" 
          placeholder="last name" 
          onChange={changeHandler} 
          name="lastName" 
          value={formData.lastName}
          /> 
        <br/> <br/>

        <input type="email" 
          name="email" 
          placeholder="email" 
          onChange={changeHandler} 
          value={formData.email}
          />
        <br/> <br/>

        <textarea placeholder="Enter your comments"
        onChange={changeHandler} 
        name="comments" 
        cols="30" rows="5"
        value={formData.comments}></textarea>
        <br/> <br/>

        <input type="checkbox" 
        name="isVisible"
        id="isVisible"
        onChange={changeHandler}
        checked={formData.isVisible}
         />
        <label htmlFor="isVisible">am I visible?</label>
        <br/> <br/>

        <fieldset>
          <legend>Mode:</legend>

          <input type="radio" 
            onChange={changeHandler}
            name="mode" 
            value="Online-Mode"
            id="Online-Mode"
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="Online-Mode">Online mode</label>

          <input type="radio" 
            onChange={changeHandler}
            name="mode" 
            value="Offline-Mode"
            id="Offline-Mode"
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline mode</label>

        </fieldset>
        <br/> <br/>

        <label htmlFor="country">Country : </label>
        <select name="country" 
         id="country"
         onChange={changeHandler}
         >

          <option value="ind">India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="pak">Pakistan</option>
          <option value="it">Italy</option>

        </select>
        <br/> <br/>

        <button type="submit">
          Submit</button>

      </form>
    </div>
  )
}

export default App
