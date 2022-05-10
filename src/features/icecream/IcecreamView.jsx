import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ordered,restocked} from "./iceCreamSlice";
export const IcecreamView = () => {
  const numberOfIcecreams = useSelector((state) => state.icecream.numberOfIceCreams);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(1);
  return (
    <div>
        <h2>Number of Icecreams - {numberOfIcecreams}</h2>
        <button onClick={ () => dispatch(ordered())}>Order Icecream</button>
        <input type="number" value={value} onChange= {e => setValue(parseInt(e.target.value))}/>
        <button onClick={ () => dispatch(restocked(value))}>Restock Icecreams</button>
    </div>
  )
}
