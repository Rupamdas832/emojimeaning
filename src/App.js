import React, { Fragment, useState } from "react"
import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Heading from "./Components/Heading";
import Input from "./Components/Input";

const App = () => {

  
  const [book2, setBook2] = useState(null)
  return(
    <Fragment>
      <Header/>
      <Heading/>
      <Input/>
      <Footer/>
    </Fragment> 
  )
}

export default App;
