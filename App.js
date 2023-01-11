import React,{useEffect, useState,useRef}from 'react'
import './App.css';




const App = () => {
  const [Count,setCount] = useState(0);
  const [StartCount,setStartCount] = useState(false);
  const [TimeCheck,setTimeCheck] = useState(0);

 const formRef = useRef(0);

  useEffect(() => {
    let initialization = null;

    if(StartCount){
      initialization = setInterval(()=> {
        setCount((prevStart) => prevStart += 1)


      },1000) 
      setTimeCheck(initialization)
      
    } else if (!StartCount && Count !== 0) {
      clearInterval(TimeCheck);
      
    }
    return () => clearInterval(TimeCheck);
  },[StartCount])


  const handlerStartButton = () => {
    setStartCount(true);
  }
  const handlerStopButton = () => {
    setStartCount(false);
  }
  const handlerresetButton = () => {
      formRef.current.value = setCount(0)
  }

  return (
    <>
  <h1>{Count}</h1>
    <button className='ButtonStart' onClick={handlerStartButton}>Start</button>
    <button className='ButtonStop' onClick={handlerStopButton}>Stop</button>
   <button className='ButtonReset' onClick={handlerresetButton}>Reset</button>
  
    </>
  )
}

export default App;
