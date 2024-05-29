import './form.css';
import React from 'react';
import { useState } from 'react';
function Signup(props){
    let [signupval,altsignup] = useState("");
    function valuechanger(event){
      altsignup(event.target.value)
    }
    function Signupvalue(){
        props.getsignupvalue(true);
        
    }
    return(
        <div className='main maincont'>
        <form>
        <div className='header' >
                Registration Form
            </div>
            <div className='cont' >
            <div className='formdiv' >enter first name</div>
            <input className='forminput' value={signupval} onChange={valuechanger} />
            </div>

            <div className='cont' >
            <div className='formdiv' >enter last name</div>
            <input className='forminput'  />
            </div>

            <div className='cont' >
            <div className='formdiv' >enter email</div>
            <input className='forminput'  />
            </div>

            <div className='cont' >
            <div className='formdiv' >enter password</div>
            <input className='forminput' />
            </div>
            <div className='formdiv buttondiv'>
            <button className='button'>signup</button>
            <div>Already have an account?<a href='#' onClick={Signupvalue}>login</a></div>
            </div>
        </form>
        </div>
    );
}
export default Signup;