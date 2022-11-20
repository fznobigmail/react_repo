import React,{useState,useEffect} from "react";
export default function Counter(){
    const [count, setCount]= useState(0);
    const [step,setStep]= useState(1);
    useEffect(()=>{
        document.title=`you clicked ${count} times`
    })
    return<>
    <p>you clicked{count} times</p>
    <input value={step} type="number" onChange={(event)=>setStep(parseInt(event.target.value))}></input>
    <button onClick={()=> setCount(count+step)}>click Me</button>
    </>

}