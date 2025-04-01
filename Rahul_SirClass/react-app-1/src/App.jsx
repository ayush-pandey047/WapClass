import React, {useState} from "react";
import Name from "./Components/Name.jsx"

function App() {
  
  const [Score,setScore] = useState(0);
  const [Ball,setBall] = useState(0);
  console.log(useState());
  console.log(Score);
  console.log(Ball)

  function HandelRun0(){
    console.log("clicked")
    setScore(Score+0)
    setBall(Ball+1)
  }

  function HandelRun1(){
    console.log("clicked")
    setScore(Score+1)
    setBall(Ball+1)
  }

  function HandelRun2(){
    console.log("clicked")
    setScore(Score+2)
    setBall(Ball+1)
  }
  function HandelRun3(){
    console.log("clicked")
    setScore(Score+3)
    setBall(Ball+1)
  }
  function HandelRun4(){
    console.log("clicked")
    setScore(Score+4)
    setBall(Ball+1)
  }
  function HandelRun6(){
    console.log("clicked")
    setScore(Score+6)
    setBall(Ball+1)
  }
  function NOBall(){
    setScore(Score+1)
    setBall(ball+0)
  }

  return (
    <div>
      <h1>Score Board</h1>
      <h1>Score : {Score}</h1>
      <h1> Balls : {Ball}</h1>
      <button onClick={HandelRun0}>0 run</button>
      <button onClick={HandelRun1}>1 run</button>
      <button onClick={HandelRun2}>2 run</button>
      <button onClick={HandelRun3}>3 run</button>
      <button onClick={HandelRun4}>4 run</button>
      <button onClick={HandelRun6}>6 run</button>
      <button onClick={NOBall}>No_Ball</button>
      <Name/>
    </div>
  )
}

export default App;