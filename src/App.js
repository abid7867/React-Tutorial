// import logo from './logo.svg';
import { useState } from "react";
import About from "./About";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  const [mode , setdMode] = useState('dark ');

  const toggleMode = ()=>{
    if(mode==='light'){
    setdMode('dark')
  }
  else{
    setdMode('light')
  }
}
  return (
    <>
      {/* {/* <Navbar  title = " TextUtils" about =" About Us"/> */}
      {/* <Navbar />  */}
     
      <Navbar title=" TextUtils"  mode = {mode} toggle ={toggleMode}/>
      <div className="container my-4">
        <TextForm heading=" Enter the Text " />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
