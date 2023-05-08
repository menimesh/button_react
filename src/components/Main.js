import React, { useState } from 'react'
import './style.css'
const Main= () =>{
    const [num,setNum]=useState(0);
function incNum(){
    setNum(num+1)
}
const decNum=()=>{
setNum(num-1)
}
const Rest =()=>{
    setNum(0)
}
    return(
        <>
        <div className="main">
                <div className="value">
                    <h2>
                        {num }
                    </h2>
                    <div className="button">
                        <button onClick={incNum}>Increase</button>
                        <button onClick={decNum}>Decrease</button>
                        <button onClick={Rest}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;