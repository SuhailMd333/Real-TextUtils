import "./App.css";
import Navbar from "./components/Navbar";
import Textform from './components/Textform';
// import About from "./components/About";
import React,{useState} from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link

// } from 'react-router-dom';

function App() {
// Function to set Alert Type and message
 
const showAlert = (type,message) => {
setAlert({
  type:type,
  msg:message
  
})
   
   setTimeout(()=>{
setAlert(null)
   },1500)
}


  // This Function works  to change the dark mode in web
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor= '#39485e'
      // Show Alert calling
      showAlert('success','Dark mode Was Enabled')
    }else {
      setMode('light')
      document.body.style.backgroundColor= 'white'
      showAlert('success','Light mode Was Enabled')
    }
  }

// This state is used for alert message
  const [alert,setAlert] = useState(null)

  // This State is used to check the state of dark mode
const [mode,setMode] = useState('light')

  return (
    // <Router>
      
      <div>
      
      {/* Navbar  */}
      
    <Navbar mode={mode} toggleMode={toggleMode}/>


      {/* Alert message */}
      <Alert alert={alert}></Alert>



      <div className="conatiner my-3">
     

      {/* <Switch>
       
        <Route exact path="/about" >
        <div className="container">
        <About />
        </div>
        {/* </Route> */}
        
        {/* <Route  exact path="/"> */} */
        <Textform mode={mode} showAlert={showAlert} />
        {/* </Route>
      </Switch> */}
      </div>
      
    </div>
    
    // </Router>
  );
}

export default App;
