import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
export default function Footer() {
    const data = useSelector(store=>store)
    const dispatch =useDispatch();
    const handleClick = ()=>{
        dispatch ({
            type: "DECRESE"
           
        })
    }
  return (
    <div>
        **************
        <button onClick={handleClick}>Giam</button>
    </div>
  )
}
