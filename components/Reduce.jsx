import React, {useReducer} from "react";

const Reduce=()=>{

    const initialState={
        count: 0
    }
    const reducer=(state,action)=>{
        switch (action.type){
            case 'increment' : 
            return {count : state.count + 1};

            case 'decrement' :
            return {count : state.count - 1};

            case 'reset' : 
            return initialState;
        }
    }
    const [state, dispatch]=useReducer(reducer, initialState)

    return(
        <>
        <h1>Count is {state.count}</h1>
        <button onClick={()=> dispatch({type : "increment"})}>incremwnt </button>
        <button onClick={()=> dispatch({type : "decrement"})}>decrement </button>
        <button onClick={()=> dispatch({type : "reset"})}>reset </button>

        </>
    )
}

export default Reduce;