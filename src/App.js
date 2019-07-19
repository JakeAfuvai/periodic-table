import React from "react"
import PeriodicTable from "./PeriodicTable"
import "./App.css"

const App = () => { 
    const nonmetalHover = () => {
        const diatomic = document.getElementsByClassName("diatomic")
        for (let i = 0; i < diatomic.length; i++) {
            diatomic[i].style.background = "rgba(255, 53, 94, 0.8)";
        }
        const polyatomic = document.getElementsByClassName("polyatomic")
        for (let i = 0; i < polyatomic.length; i++) {
            polyatomic[i].style.background = "rgba(255, 53, 94, 0.8)";
        }
        document.getElementById("nonmetals").style.background = "none"
    }
    const nonmetalLeave = () => {
        const diatomic = document.getElementsByClassName("diatomic")
        for (let i = 0; i < diatomic.length; i++) {
            diatomic[i].style.background = "";
        }
        const polyatomic = document.getElementsByClassName("polyatomic")
        for (let i = 0; i < polyatomic.length; i++) {
            polyatomic[i].style.background = "";
        }
        document.getElementById("nonmetals").style.background = "none" 
    }
    const metalloidHover = () => {
        const metalloid = document.getElementsByClassName("metalloid")
        for (let i = 0; i < metalloid.length; i++) {
            metalloid[i].style.background = "rgba(255, 255, 102, 0.8)";
        }
        document.getElementById("metalloid").style.background = "none"
    }
    const metalloidLeave = () => {
        const metalloid = document.getElementsByClassName("metalloid")
        for (let i = 0; i < metalloid.length; i++) {
            metalloid[i].style.background = "";
        }
        document.getElementById("metalloid").style.background = "none" 
    }
    const postTransitionHover = () => {
        const postTransition = document.getElementsByClassName("post-transition")
        for (let i = 0; i < postTransition.length; i++) {
            postTransition[i].style.background = "rgba(255, 110, 255, 0.8)";
        }
        document.getElementById("post-transition").style.background = "none"
    }
    const postTransitionLeave = () => {
        const postTransition = document.getElementsByClassName("post-transition")
        for (let i = 0; i < postTransition.length; i++) {
            postTransition[i].style.background = "";
        }
        document.getElementById("post-transition").style.background = "none" 
    }
    const transitionHover = () => {
        const transition = document.getElementsByClassName("transition")
        for (let i = 0; i < transition.length; i++) {
            transition[i].style.background = "rgba(102, 255, 102, 0.8)";
        }
        document.getElementById("transition").style.background = "none"
    }
    const transitionLeave = () => {
        const transition = document.getElementsByClassName("transition")
        for (let i = 0; i < transition.length; i++) {
            transition[i].style.background = "";
        }
        document.getElementById("transition").style.background = "none" 
    }
    const alkaliHover = () => {
        const alkali = document.getElementsByClassName("alkali")
        for (let i = 0; i < alkali.length; i++) {
            alkali[i].style.background = "rgba(255, 153, 102, 0.8)";
        }
        document.getElementById("alkali").style.background = "none"
    }
    const alkaliLeave = () => {
        const alkali = document.getElementsByClassName("alkali")
        for (let i = 0; i < alkali.length; i++) {
            alkali[i].style.background = "";
        }
        document.getElementById("alkali").style.background = "none" 
    }
    const alkalineHover = () => {
        const alkaline = document.getElementsByClassName("alkaline")
        for (let i = 0; i < alkaline.length; i++) {
            alkaline[i].style.background = "rgba(170, 240, 209, 0.8)";
        }
        document.getElementById("alkaline").style.background = "none"
    }
    const alkalineLeave = () => {
        const alkaline = document.getElementsByClassName("alkaline")
        for (let i = 0; i < alkaline.length; i++) {
            alkaline[i].style.background = "";
        }
        document.getElementById("alkaline").style.background = "none" 
    }
    const nobleHover = () => {
        const noble = document.getElementsByClassName("noble")
        for (let i = 0; i < noble.length; i++) {
            noble[i].style.background = "rgba(204, 255, 0, 0.8)";
        }
        document.getElementById("noble").style.background = "none"
    }
    const nobleLeave = () => {
        const noble = document.getElementsByClassName("noble")
        for (let i = 0; i < noble.length; i++) {
            noble[i].style.background = "";
        }
        document.getElementById("noble").style.background = "none" 
    }
    const lanthanideHover = () => {
        const lanthanide = document.getElementsByClassName("lanthanide")
        for (let i = 0; i < lanthanide.length; i++) {
            lanthanide[i].style.background = "rgba(80, 191, 230, 0.8)";
        }
        document.getElementById("lanthanide").style.background = "none"
    }
    const lanthanideLeave = () => {
        const lanthanide = document.getElementsByClassName("lanthanide")
        for (let i = 0; i < lanthanide.length; i++) {
            lanthanide[i].style.background = "";
        }
        document.getElementById("lanthanide").style.background = "none" 
    }
    const actinideHover = () => {
        const actinide = document.getElementsByClassName("actinide")
        for (let i = 0; i < actinide.length; i++) {
            actinide[i].style.background = "rgba(255, 0, 204, 0.8)";
        }
        document.getElementById("actinide").style.background = "none"
    }
    const actinideLeave = () => {
        const actinide = document.getElementsByClassName("actinide")
        for (let i = 0; i < actinide.length; i++) {
            actinide[i].style.background = "";
        }
        document.getElementById("actinide").style.background = "none" 
    }

    return (
        <div className="app-container">
            <h1 className="periodic-table-title">Periodic Table of Elements</h1> 
            <div className="element-category">
                <div id="nonmetals" style={{background: "none", border: "none"}} className="diatomic polyatomic" onMouseOver={nonmetalHover} onMouseOut={nonmetalLeave}>Nonmetal</div>  
                <div id="metalloid" style={{background: "none", border: "none"}} className="metalloid" onMouseOver={metalloidHover} onMouseOut={metalloidLeave}>Metalloid</div>
                <div id="post-transition" style={{background: "none", border: "none"}} className="post-transition" onMouseOver={postTransitionHover} onMouseOut={postTransitionLeave}>Post-Transition Metal</div>
                <div id="transition" style={{background: "none", border: "none"}} className="transition" onMouseOver={transitionHover} onMouseOut={transitionLeave}>Transition Metal</div>
                <div id="alkali" style={{background: "none", border: "none"}} className="alkali" onMouseOver={alkaliHover} onMouseOut={alkaliLeave}>Alkali Metal</div>
                <div id="alkaline" style={{background: "none", border: "none"}} className="alkaline" onMouseOver={alkalineHover} onMouseOut={alkalineLeave}>Alkaline Earth Metal</div>
                <div id="noble" style={{background: "none", border: "none"}} className="noble" onMouseOver={nobleHover} onMouseOut={nobleLeave}>Noble Gas</div>
                <div id="lanthanide" style={{background: "none", border: "none"}} className="lanthanide" onMouseOver={lanthanideHover} onMouseOut={lanthanideLeave}>Lanthanide</div>
                <div id="actinide" style={{background: "none", border: "none"}} className="actinide" onMouseOver={actinideHover} onMouseOut={actinideLeave}>Actinide</div>
            </div>   
            <PeriodicTable />
        </div>
    )
}

export default App