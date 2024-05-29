import React from "react";
import './stopwatch.css'
import { useState,useEffect } from "react";
let Stopwatch = ()=>{
  let [button ,altbutton] = useState(false);
  let [millisec,setmillisec] = useState(0)
  let [sec,setsec] = useState(0)
  let clickhandle = ()=>{altbutton(!button)
    
  }
  useEffect(
  setInterval(()=>{setsec(sec += 1)},1000))
  setInterval(()=>{
    setmillisec(millisec +=1)
  },16.7)
     return(
      <div>
        <div className="cont" >
          <div className="subcont" >{millisec}</div>
          <div className="subcont" >{sec}</div>
          <button onClick={clickhandle }  className="bucont"  >{button? "stop" : "start"}</button>

        </div>
      </div>
     )
}
export default Stopwatch;