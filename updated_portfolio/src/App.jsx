import "./website.css";
import {useState} from "react";
import Projects from "./Projects.jsx";
import Experiences from "./Experiences.jsx";

export const metadata = {
  title: "Welcome to my portfolio",
  description: "Here you'll find all the information you want about myself",
};

function App(){

  const [current, setNewScreen] = useState('Project'); //set the default state to be projects. 
  const swap = (newScreen) =>{setNewScreen(newScreen)}; //this is how we swap our screens


  return(
    <div>
      {current === 'Project' && <Projects swapPage = {swap}/>}
      {current === 'Experiences' && <Experiences swapPage = {swap}/>}
    </div>

  );
  
}


export default App