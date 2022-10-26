import "./App.scss";
import React, { useEffect, useState } from "react";
import Dropdown from "./components/dropdown/index.tsx";
import Particlesdata from "./components/Particles.tsx";
import Films from "./components/films/index.tsx";
function App() {
    const [toggle, settoggle] = useState("dropdown")
    const [display, setdisplay] = useState({
        film:"none",
        dropdown:"visible"
    })
    const handleToggle = ()=>{
            if(toggle === "dropdown"){
                settoggle('film-menu')
                setdisplay({film:"block",dropdown:"hidden"})
            }else{
                settoggle('dropdown')
                setdisplay({film:"none",dropdown:"visible"})
            }
    }
  useEffect(() => {
    const films = async()=>{
        let result = await fetch('https://swapi.dev/api/films');
        let data = await result.json();
        localStorage.setItem('films', JSON.stringify(data))
    };
    films()
    
  }, [])
  
  return (
    <div className="App">
      <Particlesdata/>
      <div className="home">
        <div className="App-header">
          <div className="left-main txt">STAR</div>
          <div className="right-main txt">WARS</div>
        </div>
      </div>
      <Films toggle = {toggle} handleToggle = {handleToggle} display = {display}/>
      <Dropdown handleToggle = {handleToggle} display = {display}/>
    </div>
  );
}

export default App;
