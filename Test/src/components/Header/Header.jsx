import React from 'react'
import {useSelector, useDispatch} from "react-redux"
export default function Header() {
    const data = useSelector(a=>a)
    const dispatch = useDispatch()
    const increHandle =()=>{
        dispatch ({
            type: "Incre"
        })
    }
  return (
    <>
        count: {data}
        <button onClick={increHandle}>Tăng</button>
    </>
  )
}
