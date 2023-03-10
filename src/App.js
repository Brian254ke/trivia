import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import  Header from './components/Header.js';
import  Footer from './components/Footer.js';
import  Welcome from './components/Welcome.js';
import  Signin from  './components/Signin.js';
import  Signup from './components/Signup.js';
import  Home  from './components/Home.js';
import User from './components/User.js';
function App() {


  return(
   <Router>
      <Header/>
          <Routes>
              <Route index element = { <Welcome/> }></Route>
              <Route path = '/' element = {<Welcome/>}></Route>
              <Route exact path = '/signin' element = {<Signin/> } > </Route>
              <Route exact path = '/signup' element = {<Signup/> } > </Route>
              <Route exact path = '/home'   element = {<Home/>} > </Route>
              <Route exact path = '/user'   element = {<User/>} > </Route>
            </Routes>
      <Footer/>
  </Router>
  );
}

export default App;

