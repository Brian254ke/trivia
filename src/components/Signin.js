import React, {useEffect, useState } from  'react';
import {useNavigate} from 'react-router-dom';
const Signin = () => {

   useEffect(() =>{
   sessionStorage.clear();
   },[]);

   const [unameErr,setUnameErr] = useState("");
   const [pinErr,setPinErr] = useState("");
   const [errorMessage,setErrorMessage] = useState("");
   const navigate = useNavigate();
  // const [ user,setUser ] = useState (null);
   const[ pin,setPin ] = useState("");
   const[ username, setUsername ] = useState("");

   const validate = () => {
     if ( (username.length  < 3) || (username === "")){
         alert("Username is too short");
     }
     if (pin.length < 4 ||  pin === "") {
        alert("Pin is too short, 4 digits minimum required");
     }
     setUnameErr("");
    return true
   }

   const  handleSubmit = (e) =>{
    e.preventDefault();
    if(validate()){
      fetch('http://localhost:3000/user?q=' + username)
     .then(res =>  res.json()    ) 
     .then( resp => {
            if ( Object.keys(resp).length  === 0 ){
               setErrorMessage("Incorrect username or Password");
            }
           else {
                let data = JSON.parse(JSON.stringify(resp[0]));
                alert(data.pin);
                if (data.pin === pin){
                       sessionStorage.setItem('username',username);
                        navigate('/home', {
                        state: {
                          activename: `${username}`,
                          activeusername: "name",
                        }
                        });
                 }
                else { setPinErr("Incorrect Pin"); }
           } 
   })
     .catch( err => console.log(err) );
    }
    }
 return(
  <div className="container">
   <div className ="inner">

     <div className = "space"></div>

     <form onSubmit={handleSubmit} className = "form">

      <div className="inputfield inputspace">
       <input required type="text" placeholder = "Username" value={username} onChange = { e => setUsername(e.target.value) } />
       <div className = "errormessage"> {unameErr} </div>
      </div>

      <div className="inputfield inputspace">
        <input required type ="int" placeholder = "Pin" value = {pin} onChange = {e => setPin(e.target.value)} />
        <div  className = "errormessage">  {pinErr} </div>
      </div>

       <div  className = "errormessage"> {errorMessage} </div>

      <div className="submitfield">
         <button className="btn" type = "submit">
          login
         </button>
      </div>

     </form>

     <div className="space"></div>
   </div>
 </div>
)
};
export default Signin;
