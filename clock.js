import "./clock.css";
import { useState } from "react";
import Stopwatch from "./stopwatch";
let Clock = ()=>{
 let [time,setTime] = useState( new Date())
 setInterval(()=>{
    setTime( new Date())
 },1)
 const hour = time.getHours()
 const minutes = time.getMinutes();
 const seconds = time.getSeconds()
 const date = time.toLocaleDateString()


 return(
    < div className="out-containor" >
    <h3>{date}</h3>
    <div className="time-containor" >    
    <h3>{ hour < 10? '0' + hour  : hour }</h3>
    <h3>{ minutes <10? '0' + minutes : minutes}</h3>
    <h3>{ seconds < 10 ? '0' + seconds : seconds}</h3>
    </div>
        </div>
   
     


    )}
export default Clock;