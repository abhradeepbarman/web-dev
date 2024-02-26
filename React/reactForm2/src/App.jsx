import React, { useState } from 'react'

const App = () => {

  const [formData, setFormData] = useState({
    "firstName": "",
    "lastName": "",
    "email": "",
    "country": "IND",
    "street": "",
    "city": "",
    "state": "",
    "pin": "",
    "comments": false,
    "candidates": false,
    "offers": false,
    "pushNotifications": ""
  })


  function inputHandler(event) {

    const {name, value, type, checked} = event.target;

    setFormData(prevData => {
      return {
        ...prevData,
        [name]: type == "checkbox" ? checked : value
      }
    } )

  }
  
  function submitHandler(event) {
    event.preventDefault();
    console.log("FormData values:", formData)
  }

  return (
      <form onSubmit={submitHandler}
          className='w-[700px] mx-auto py-8 space-y-2 px-3 '>

        <label htmlFor="firstName" className='font-semibold mt-2'>
            First Name</label> 
        <input type="text" name="firstName" id="firstName" placeholder='Abhradeep'
        onChange={inputHandler} value={formData.firstName} 
        className='p-2 rounded-md outline outline-blue-300 outline-[1px] w-full' /> 

        <label htmlFor="lastName" className='font-semibold'>Last Name</label>  
        <input type="text" name="lastName" id="lastName" placeholder='Barman' 
        onChange={inputHandler} value={formData.lastName} 
        className='p-2 rounded-md outline outline-blue-300 outline-[1px] w-full'
        /> 

        <label htmlFor="email" className='font-semibold'>Email address</label> 
        <input type="email" name="email" id="email" placeholder='adb@duck.com'
        onChange={inputHandler} value={formData.email} 
        className='p-2 rounded-md outline outline-blue-300 outline-[1px] w-full'
        /> 


        <label htmlFor="country" className='font-semibold'>Country</label> 
        <select name="country" id="country" onChange={inputHandler} value={formData.country} className='p-2 rounded-md outline outline-blue-300 outline-[1px] w-full' >
          <option value="IND">India</option>
          <option value="USA">United States</option>
          <option value="CND">Canada</option>
          <option value="MXC">Mexico</option>
        </select>


        <label htmlFor="street" className='font-semibold'>Street address</label> 
        <input type="text" name="street" id="street" placeholder='1234 Main St' onChange={inputHandler} 
        value={formData.street}
        className='p-2 rounded-md outline outline-blue-300 outline-[1px] w-full' /> 

        <label htmlFor="city" className='font-semibold'>City</label> 
        <input type="text" name="city" id="city" placeholder='Siliguri' onChange={inputHandler}
        value={formData.city} className='p-2 rounded-md outline outline-blue-300 outline-[1px] w-full' /> 

        <label htmlFor="state" className='font-semibold'>State / Province</label> 
        <input type="text" name="state" id="state" placeholder='West Bengal' onChange={inputHandler}
        value={formData.state}
        className='p-2 rounded-md outline outline-blue-300 outline-[1px] w-full' /> 

        <label htmlFor="pin" className='font-semibold'>ZIP / Postal code</label> 
        <input type="text" name="pin" id="pin" placeholder='734008'
        onChange={inputHandler} value={formData.pin}
        className='p-2 rounded-md outline outline-blue-300 outline-[1px] w-full' /> 


        <fieldset>
            <legend className='font-semibold'>By Email</legend>

            <div className='flex gap-x-4 items-baseline my-3'>
              <input type="checkbox" name="comments" id='comments' onChange={inputHandler} 
              checked={formData.comments} />
              <div className='flex flex-col'>
                <label htmlFor="comments" className='font-semibold'>Comments</label>
                <p className='text-slate-500 text-sm'>Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>


            <div className='flex gap-x-4 items-baseline my-3'>
              <input type="checkbox" name="candidates" id='candidates' onChange={inputHandler} 
              checked={formData.candidates} />
              <div className='flex flex-col'>
                <label htmlFor="candidates" className='font-semibold'>Candidates</label>
                <p className='text-slate-500 text-sm'>Get notified when a candidate applies for a job.</p>
              </div>
            </div>

            <div className='flex gap-x-4 items-baseline my-3'>
              <input type="checkbox" name="offers" id='offers' onChange={inputHandler} 
              checked={formData.offers} />
              <div className='flex flex-col'>
                <label htmlFor="offers" className='font-semibold'>Offers</label>
                <p className='text-slate-500 text-sm'>Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          
        </fieldset>


        <fieldset>
          <legend className='font-semibold'>Push Notifications</legend>
          <p className='text-slate-500 text-sm'>These are delivered via SMS to your mobile phone.</p>


          <div className='flex gap-x-3 my-2'>
              <input type="radio" name="pushNotifications" id='everything' 
              value="everything"  onChange={inputHandler} 
              checked={formData.pushNotifications ==="everything"} />
              <label htmlFor="everything" className='font-semibold'>Everything</label> 
          </div>

          <div className='flex gap-x-3 my-2'>
              <input type="radio" name="pushNotifications" id='same-as-email' 
              value="same-as-email"  onChange={inputHandler}
              checked={formData.pushNotifications ==="same-as-email"} /> 
              <label htmlFor="same-as-email" className='font-semibold'>Same as Email</label>  
          </div>

          <div className='flex gap-x-3 my-2'>
              <input type="radio" name="pushNotifications" id='no-push' value="no-push"  onChange={inputHandler} 
              checked={formData.pushNotifications === "no-push"} />
              <label htmlFor="no-push" className='font-semibold'>No push Notifications</label>  
          </div>

        </fieldset>
        
        <button className='bg-blue-500 text-white text-lg font-bold px-3 py-2 rounded-lg mt-4'>Save</button>

      </form>
  )
}

export default App
