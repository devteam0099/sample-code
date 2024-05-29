import './tempconverter.css';
import { useState } from 'react';
function Tempconverter(){
    let [calcius,altcalcius] = useState();
    let [forenheight,altforenheight] = useState();
    let [currentstatus,updatestatus]= useState()
    //takes value from calcius field and convert into forenheit
    function calciusconverter(event){
        altcalcius(event.target.value)
        let c = event.target.value
        let forenheighttemp = c * (9/5 ) + 32
        forenheighttemp.toFixed(0)
        altforenheight(forenheighttemp)
        updatestatus(false)
    }
    //takes value from forenheit field and convert into calcius
    function forenheightconverter(event){
        altforenheight(event.target.value)
        let f = event.target.value
        let calciustemp = ( f -32)* 5/9
        calciustemp.toFixed(3)
        altcalcius(calciustemp)
        updatestatus(true)
        
        
    }
    function click(){
        altcalcius("")
        altforenheight("")
    }
   return(
    <div>
        <div className='min-div' >
        <div className='sub-div' >
            <div className='text-div' >Enter Temperature In Calcius</div>
            <input className='inp-div' onChange={calciusconverter} value={calcius} onClick={click} />
        </div>
        <div className='sub-div' >
        <div className='text-div' >Enter Temperature In Forenheit</div>
            <input className='inp-div' onChange={forenheightconverter} value={forenheight} onClick={click} />
        </div>
        </div>
        <h3 className='text-div' >{ currentstatus? `Temperature In calcius = ${calcius}` :`Temperature In Forenheit = ${forenheight}` }</h3>
            </div>
   )   
}
export default Tempconverter;