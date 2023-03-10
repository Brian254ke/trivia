import {useState} from 'react';
const Header = ()=>{
  const[canView,setCanView]= useState(false);
  const showMenu = () =>{
  setCanView(!canView);
  };
  return (
     <div className ="top">
     <div className="header">
          <p className="brand">Trivia</p>
          <input type="checkbox" className="openSidebarMenu" id = "openSidebarMenu" onChange = {showMenu} />

           <label for="openSidebarMenu" className="sidebarIconToggle">
             <div className = "spinner diagonal part-1"> </div>
             <div className = "spinner horizontal"> </div>
             <div className = "spinner diagonal part-2"></div>
           </label>

     </div>
        { canView &&
           <div className="sidebarMenu">
             <ul className = "sidebarMenuInner">
               <li><a href = "youtube.com">Create Account</a></li>
               <li><a href = "twitter.com">Login</a></li>
               <li><a href = "youtube.com"> Developer</a></li>
               <li><a href = "youtube.com"> About </a></li>
             </ul>
          </div>
        }
     </div>
)
}
export default Header ;
