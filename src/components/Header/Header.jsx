import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {action} from "../../action/action.js"
export default function Header() {
    const data = useSelector(store=>store)// store là state ban đầu khai báo
    const dispatch =useDispatch();
    const handleClick = ()=>{
        dispatch ( action("INCRESE",5))
    }

    return (
    <div>
        count: {data.count}
        <button onClick={handleClick}>Tang</button>
    </div>
  )
}
