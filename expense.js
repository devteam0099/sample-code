import './expense.css';
import { useState } from 'react';
function Expensehandler(){
    let [inputvalue ,changeinputvalue] = useState('');
    let [expenses , setexpenses] = useState([]);
    let[currentbutton,changebutton] = useState(false)
    let [editeditem,setediteditem] = useState(null)

    function editandsave(expenseid){
        if(inputvalue == ""){
              let newedit = expenses.find((editexp)=>{return expenseid === editexp.id})
              changeinputvalue(newedit.name)
              changebutton(!currentbutton)
              setediteditem(expenseid)
        }}
          
    
    function changehandler(event){
         changeinputvalue(event.target.value);
    }
    
    function addexpense(){
        if(inputvalue == ''){alert("this field can not be empty")}

        else if(currentbutton){
            setexpenses(
            expenses.map((editedvalue)=>{
                if(editedvalue.id == editeditem){
                    return {...editedvalue, name:inputvalue}
                }  
                return editedvalue;
            }))
           changebutton(!currentbutton)
           changeinputvalue("")
        }

        else{
            let allinputdata = {name : inputvalue, id : new Date().getTime().toString()}
            setexpenses([...expenses,allinputdata])
            changeinputvalue('');}
    }

function expenseremover(index){
   setexpenses(expenses.filter((exp)=>index !== exp.id))
}
function enterhandler(key){
    if(key.key == "enter"){
        addexpense();
    }
}


return(
    <div>

        <div className='outer-input' > 
            <input className='input-field' value= { inputvalue} autoFocus={true} required={true} onChange={changehandler} />
            <button onClick={addexpense} className='input-button' onKeyDown={enterhandler} >{currentbutton? "edit expense" : "add expense"}</button>
        </div>

        <ul className='all-containor' >

        {expenses.map((expense,index) => (
            <li>

        <div className='outer' >
                <div className='inner' >
                <input type='checkbox' />
        </div>

        <h3 className="inner1"  key={expense.id}>{expense.name}</h3>

        <div>
            <button className='inner' onClick={()=>{expenseremover(expense.id)}} >remove</button>
            <button className='inner' onClick={()=>{editandsave(expense.id)}} >edit</button>
        </div>

         
        </div>
            </li>
        ))}
        
        </ul>
   </div>
    )
}
export default Expensehandler;