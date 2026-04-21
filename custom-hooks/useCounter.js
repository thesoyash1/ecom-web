import React, {useState} from "react";

function useCounter(initialValue){
    const [count,setCount]=useState(initialValue);

    const Increment=()=>setCount(e=> e+1);
    const Decrement = ()=>setCount( e => e-1);
    const reset =()=>setCount(initialValue); 

    return {count, Increment, Decrement, reset};
}

export default useCounter;