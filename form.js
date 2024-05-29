import './form.css';
import React from 'react';
import { useState } from 'react';
function Login(props){
      let [orgvalue,altvlaue] = useState("");
        function valueupdater(event){
        altvlaue(event.target.value);
        }
       
       function Loginform(){
        props.getloginvalue(false);
       }
    
    return(
        <div className='main'>
        <form>
            <div className='header' >
                Login Form
            </div>
           <div className='cont' >
             <div className='formdiv' >Enter email</div>
            <input className='forminput' onChange={valueupdater} />
            </div>
            <div className='cont' >
            <div className='formdiv' >enter password</div>
            <input className='forminput' />
            </div>
            
            <div className='formdiv buttondiv'>
            <button className='button'>Login</button>
            <div>Don't have an account?<a href='#' onClick={Loginform}>create one</a></div>
            </div>
        </form>
        </div>
    );
}
export default Login;