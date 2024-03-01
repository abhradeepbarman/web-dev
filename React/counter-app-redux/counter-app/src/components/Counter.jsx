import React from 'react'
import { useDispatch, useSelector } from "react-redux" 
import {increment, decrement} from "../redux/slices/CounterSlice"

const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <div className='w-screen h-screen flex justify-center text-4xl items-center gap-x-8'>
      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <div>{count}</div>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  )
}

export default Counter
