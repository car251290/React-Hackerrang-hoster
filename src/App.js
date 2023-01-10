import React,{useEffect, useState}from 'react'
import './App.css';




const App = () => {
  const [Count,setCount] = useState(0);
  const [StartCount,setStartCount] = useState(false);
  const [TimeCheck,setTimeChack] = useState(0);

  useEffect(() => {
    let inicialition = null;

    if(StartCount){
      inicialition = setInterval(()=> {
        setCount((prevStart)=> prevStart += 1)


      },1000) 
      setTimeChack(inicialition)
      
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

  return (
    <>
  <h1>{Count}</h1>
    <button onClick={handlerStartButton}>Start</button>
    <button onClick={handlerStopButton}>Stop</button>
  
    </>
  )
}

export default App;
