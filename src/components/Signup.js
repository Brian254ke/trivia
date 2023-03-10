import {Link} from 'react-router-dom';
import React, { useState} from 'react';

const  Signup = ()=>{

     const[pin,setPin] = useState("");
     const[username,setUname] = useState("");
     const[name,setName]= useState("");
     const[id,setId] = useState("");
     function createId(){
      const no = Math.floor(Math.random() * 100);
      setId(no);
     }

     const  handleSubmit = (e) =>{
     e.preventDefault();
     const user = {id,name,username,pin };
      fetch('http://localhost:3000/user', {
      method: 'POST',
      body:JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
      }).then(res => res.json())
      .then(json => alert("user created")).catch(err => console.log(err));
      }
    const errormessage = "";

    return(
    <div className="container">
     <div className="inner">
      <form onSubmit = {handleSubmit} className = "form" >

       <p className = "innerp">Your First Name : </p>
       <div className="inputfield">
       <input required  type="text" value={name} onChange= { e => setName(e.target.value)}   placeholder = "John"  />
       <br/> <div className="errormessage"> {errormessage}</div>
       </div>

       <p className = "innerp"> Create  Username :</p>
       <div className="inputfield">
        <input type="text" placeholder="wierdo254" value = {username}   onChange = { e => setUname(e.target.value)}  />
        <br/> <div className = "errormessage">{errormessage}</div>
       </div>

       <p className= "innerp"> Create  Pin :</p>
       <div className ="inputfield">
          <input required  type="int" placeholder ="4586" value = {pin} onChange = { e => setPin(e.target.value) }  />
          <br/><div className = "errormessage">{errormessage}</div>
       </div>
          {createId}
          <input value = {id} disabled ="disabled"  className = "disabled"/>

       <div className = "submitfield submit-field">
         <button className="btn "  type="submit" >
           Create Player
         </button>

        <Link to="/signin"  style={{ textDecoration: 'none' }} >
         <div className="important"> I have an account login instead ?</div>
        </Link>

        </div>

      </form>
     </div>
    </div>
   )


};
export default Signup;
