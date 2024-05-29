import './password.css';
import React, { useRef } from 'react';
import { useState , useCallback,useEffect } from 'react';
function Passwordgenerator () {
    
    let [password, updatepassword] = useState("");
    let [leangth, updateleangth] = useState(8);
    let [orgnumber,altnumber] = useState(false);
    let [orgcharacter,altcharacter] = useState(false);
    let passref = useRef(null);
    function leangthchanger(event){
        updateleangth(event.target.value)
    }
    function numberhandler(){altnumber(!orgnumber)}
    function charactershandler(){altcharacter(!orgcharacter)}
    let copy = useCallback(()=>{
        window.navigator.clipboard.writeText(password);
        passref.current?.select();
    })
    const passwordorg = useCallback(() =>{
        let passstr;
        let pass = "";
        let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAMNBVCXZ";
        let num = "0123456789";
        let char = "!@#$%&?/"
        if(orgnumber){str+=num}
        if(orgcharacter){str+=char}
        for(let i =1;i<= leangth;i++){
            let passstr = Math.floor(Math.random() * str.length +1);
            pass += str.charAt(passstr);
            updatepassword(pass);
        }},[leangth,orgcharacter,orgnumber,updatepassword])
        useEffect(()=>{
            passwordorg();
        },[leangth,orgcharacter,orgnumber])
    return(
        <div className='main'>
            <div className='heading' >Password Generator</div>
            <div className='subdiv' >
                
            <input className='inbucont' value={password} readOnly="true" ref={passref} />
            <button className='button' onClick={copy} >copy</button>
            
            </div>
            <div className='subdiv2' >
                <div>
            <input type="range" value={leangth} onChange={leangthchanger} />
            <span className='span' >leangth({leangth})</span>
            </div>
            <div>
            <input type="checkbox" onChange={numberhandler} />
            <span className='span'>numbers</span>
            </div>
            <div>
            <input type="checkbox" onChange={charactershandler} />
            <span className='span'>characters</span>
            </div>
            </div>

        </div>
    )
}
export default Passwordgenerator;