import "./website.css";
import {useState} from "react";
import Projects from "./projects";
import Experiences from "./experiences.jsx";

export const metadata = {
  title: "Welcome to my portfolio",
  description: "Here you'll find all the information you want about myself",
};

function App(){
  //we will use memoization to make sure the portfolio is as efficient as possible when loading. 
  const [current, setNewScreen] = useState('Project'); //set the default state to be projects. 
  const swap = useMemo(() => {return (newScreen) =>{setNewScreen(newScreen)} //this is how we swap our screens
  },[]); //empty array made to improve performance


  //return the div where its either the projects page or experiences page. 
  return(
    <div> 
      {current === 'Project' && <Projects swapPage = {swap}/>}
      {current === 'Experiences' && <Experiences swapPage = {swap}/>}
    </div>

  );
  
}


export default App