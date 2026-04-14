import React, {useReducer, useState} from 'react'

const Todo = () => {
   const initialState={
    ms : 0,
    min :0,
    running : false
  }
  const [ms,setms]=useState(initialState.ms);
  const [min,setMin]=useState(initialState.min);
  const [startclick,setstartclick]=useState(false);
 
  let timetostop=60;

  // const increMnet=(e)=>{
  //   while(e){
  //     setms++
  //   }
  // }

  const reducer=(state,action)=>{
    switch(action.type){
      case  ('increment') :
      const interval=  setInterval(()=>{
        setms++;
      })
        

        if(timetostop==60){
          clearInterval(interval);
        }
      }
    
}
  const [state, dispatch]=useReducer(reducer, initialState);
 return (
    <div className='flex flex-col justify-between my-5 py-5'>lll
      <div className='flex justify-center items-center gap-1 bg-gray-700  text-white w-2xs'>
        <p>time</p>
        <span> {min} : {ms}</span>
      </div>
      <div className='flex flex-row gap-0.5 items-center justify-center bg-gray-700  text-white w-2xs py-3.5'>
        {!startclick && (
        <button className='px-4 py-2 bg-red-400' onClick={()=>dispatch({type : "increment"}, setstartclick(true) ) } >start</button>
        )}
        {startclick && (
            <>
              <button  className='px-4 py-2 bg-red-400 ' onClick={()=>dispatch(setms(initialState.min), setstartclick(false))}>Reset</button>
              <button className='px-4 py-2 bg-red-400'>Resume</button>
            </>
        )}
        
      </div>
    </div>
  )
}

export default Todo;
