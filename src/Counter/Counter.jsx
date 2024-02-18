import {useState} from 'react'
import './Counter.module.css';

function Counter(){
    let[count,setCount]=useState(0);
    const changeCounter=()=>{
        setCount(count+1);
    }
    return(
        <button className="bg" onClick={changeCounter}>nada asad {count}</button>
    );
}

  
export default Counter