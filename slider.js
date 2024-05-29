import { useState,useEffect } from "react"
import "./slider.css"
import image1 from './images/image1.webp'
import image2 from './images/image2.webp'
import image3 from './images/image3.webp'
import image4 from './images/image4.webp'
import image5 from './images/image5.webp'
function Smartslider(){
    
    let[current,alt] = useState(1);
    let images =[image1,image2,image3,image4,image5]
    
    useEffect(()=>{
        setInterval(()=>{
            alt((current)=>(
                current === 5? 1 : current +1
            ))
        },5000)
    },[])    

    function nexthandler(){
       alt((current)=>(current === 5? 1 : current +1))}

    function prevhandler(){
        alt((current)=>(current === 1? 5 : current -1))
        console.log(current)
    }
   
            return (
                <div className="imagediv" >
                <span className="navbutton" onClick={prevhandler} >previous</span>
                <img className="image" alt="" src={images[current -1]} />
                <span className="navbutton2" onClick={nexthandler} >next</span>
                 </div>)
                
    
    
    }
export default Smartslider ;