import React from "react"
import { withContext } from "./AppContext"
import Fade from "react-reveal/Fade"
import "./MoreInfoCard.css"

const MoreInfoCard = props => {
    const showInfoClass = props.element.name ? "show-element-info" : "no-display"
    const shellChart = props.element.name && props.element.shells.map((shell,i)=>
        <div key={props.element.name + i}>
            <div key={props.element.name} className="shell-container" style={{position: "relative", left: "10%"}}>
                {i===0 ?
                <svg width="30%" height="30%" viewBox="0 0 42 42" className="donut">
                    <circle 
                        className="donut-hole" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                    >
                    </circle>
                    <circle 
                        className="donut-ring" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1.7"
                    >
                    </circle>
                    <circle 
                        className="donut-sector" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="#ffff66"
                        strokeWidth="1.7"
                        strokeDasharray={`${(shell/2)*100} ${100-((shell/2)*100)}`}
                        strokeDashoffset="50"
                    >
                    </circle>
                    <g className="chart-text">
                        <text x="50%" y="50%" className="chart-number">
                        {shell} / 2
                        </text>
                        <text x="50%" y="50%" className="chart-label">
                        e-
                        </text>
                    </g>
                </svg>
                : i===1 ?
                <svg width="40%" height="40%" viewBox="0 0 42 42" className="donut">
                    <circle 
                        className="donut-hole" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                    >
                    </circle>
                    <circle 
                        className="donut-ring" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1.6"
                    >
                    </circle>
                    <circle 
                        className="donut-sector" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="#50bfe6"
                        strokeWidth="1.6"
                        strokeDasharray={`${(shell/8)*100} ${100-((shell/8)*100)}`}
                        strokeDashoffset="50"
                    >
                    </circle>
                    <g className="chart-text">
                        <text x="50%" y="50%" className="chart-number">
                        {shell} / 8
                        </text>
                        <text x="50%" y="50%" className="chart-label">
                        e-
                        </text>
                    </g>
                </svg>
                : i===2 ?
                <svg width="50%" height="50%" viewBox="0 0 42 42" className="donut">
                    <circle 
                        className="donut-hole" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                    >
                    </circle>
                    <circle 
                        className="donut-ring" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1.5"
                    >
                    </circle>
                    <circle 
                        className="donut-sector" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="#ff9966"
                        strokeWidth="1.5"
                        strokeDasharray={`${(shell/18)*100} ${100-((shell/18)*100)}`}
                        strokeDashoffset="50"
                    >
                    </circle>
                    <g className="chart-text">
                        <text x="50%" y="50%" className="chart-number">
                        {shell} / 18
                        </text>
                        <text x="50%" y="50%" className="chart-label">
                        e-
                        </text>
                    </g>
                </svg>
                : i===3 ?
                <svg width="60%" height="60%" viewBox="0 0 42 42" className="donut">
                    <circle 
                        className="donut-hole" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                    >
                    </circle>
                    <circle 
                        className="donut-ring" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1.4"
                    >
                    </circle>
                    <circle 
                        className="donut-sector" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="#66ff66"
                        strokeWidth="1.4"
                        strokeDasharray={`${(shell/32)*100} ${100-((shell/32)*100)}`}
                        strokeDashoffset="50"
                    >
                    </circle>
                    <g className="chart-text">
                        <text x="50%" y="50%" className="chart-number">
                        {shell} / 32
                        </text>
                        <text x="50%" y="50%" className="chart-label">
                        e-
                        </text>
                    </g>
                </svg>
                : i===4 ?
                <svg width="70%" height="70%" viewBox="0 0 42 42" className="donut">
                    <circle 
                        className="donut-hole" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                    >
                    </circle>
                    <circle 
                        className="donut-ring" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1.3"
                    >
                    </circle>
                    <circle 
                        className="donut-sector" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="#fd5b78"
                        strokeWidth="1.3"
                        strokeDasharray={`${(shell/32)*100} ${100-((shell/32)*100)}`}
                        strokeDashoffset="50"
                    >
                    </circle>
                    <g className="chart-text">
                        <text x="50%" y="50%" className="chart-number">
                        {shell} / 32
                        </text>
                        <text x="50%" y="50%" className="chart-label">
                        e-
                        </text>
                    </g>
                </svg>
                : i===5 ?
                <svg width="80%" height="80%" viewBox="0 0 42 42" className="donut">
                    <circle 
                        className="donut-hole" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                    >
                    </circle>
                    <circle 
                        className="donut-ring" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1.2"
                    >
                    </circle>
                    <circle 
                        className="donut-sector" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="#aaf0d1"
                        strokeWidth="1.2"
                        strokeDasharray={`${(shell/18)*100} ${100-((shell/18)*100)}`}
                        strokeDashoffset="50"
                    >
                    </circle>
                    <g className="chart-text">
                        <text x="50%" y="50%" className="chart-number">
                        {shell} / 18
                        </text>
                        <text x="50%" y="50%" className="chart-label">
                        e-
                        </text>
                    </g>
                </svg>
                : i===6 ?
                <svg width="90%" height="90%" viewBox="0 0 42 42" className="donut">
                    <circle 
                        className="donut-hole" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                    >
                    </circle>
                    <circle 
                        className="donut-ring" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1.1"
                    >
                    </circle>
                    <circle 
                        className="donut-sector" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="#ff00cc"
                        strokeWidth="1.1"
                        strokeDasharray={`${(shell/8)*100} ${100-((shell/8)*100)}`}
                        strokeDashoffset="50"
                    >
                    </circle>
                    <g className="chart-text">
                        <text x="50%" y="50%" className="chart-number">
                        {shell} / 8
                        </text>
                        <text x="50%" y="50%" className="chart-label">
                        e-
                        </text>
                    </g>
                </svg>
                : i===7 &&
                <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
                    <circle 
                        className="donut-hole" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                    >
                    </circle>
                    <circle 
                        className="donut-ring" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1"
                    >
                    </circle>
                    <circle 
                        className="donut-sector" 
                        cx="21" 
                        cy="21" 
                        r={100/(2*Math.PI)} 
                        fill="transparent"
                        stroke="#ff6037"
                        strokeWidth="1"
                        strokeDasharray={`${(shell/2)*100} ${100-((shell/2)*100)}`}
                        strokeDashoffset="50"
                    >
                    </circle>
                    <g className="chart-text">
                        <text x="50%" y="50%" className="chart-number">
                        {shell} / 2
                        </text>
                        <text x="50%" y="50%" className="chart-label">
                        e-
                        </text>
                    </g>
                </svg>
                }
            </div>
        </div>
    )
    const modalColor = 
        props.element.category === "diatomic nonmetal" || props.element.category === "polyatomic nonmetal" 
        ? 
        {background: "rgba(255, 53, 94, 0.5)"} 
        : props.element.category === "metalloid" 
        ?
        {background: "rgba(255, 255, 102, 0.5)"}
        : props.element.category === "post-transition metal" 
        ?
        {background: "rgba(255, 110, 255, 0.5)"}
        : props.element.category === "alkali metal" 
        ?
        {background: "rgba(255, 153, 102, 0.5)"}
        : props.element.category === "alkaline earth metal" 
        ?
        {background: "rgba(170, 240, 209, 0.5)"}
        : props.element.category === "noble gas" 
        ?
        {background: "rgba(204, 255, 0, 0.5)"}
        : props.element.category === "lanthanide" 
        ?
        {background: "rgba(80, 191, 230, 0.5)"}
        : props.element.category === "transition metal" 
        ?
        {background: "rgba(102, 255, 102, 0.5)"}
        : 
        {background: "rgba(255, 0, 204, 0.5)"} 
        console.log(props.showModal)
    return (
        <Fade>
        <div className={`element-outer-modal ${showInfoClass}`} style={modalColor}>
            <div className="element-inner-modal">
                <div className={`exit-button`} onClick={()=>props.closeElementCardInfo(props.element.name)} style={{width: "100%", textAlign: "center"}}>X</div>
                <h1>{props.element.name}</h1>
                <h3>Symbol</h3>
                <p>{props.element.symbol}</p>
                <h3>Number</h3>
                <p>{props.element.number}</p>
                <h3>Atomic Mass</h3>
                <p>{props.element.atomic_mass}</p>
                <h3>Category</h3>
                <p>{props.element.category}</p>
                <h3>Description</h3>
                <p className="summary">{props.element.summary}</p>
                <h3>Boil (K)</h3>
                <p>{props.element.boil}</p>
                <h3>Melt (K)</h3>
                <p>{props.element.melt}</p>
                <h3>{props.element.name} Electron Shell Chart ({props.element.shells.length} {props.element.shells.length > 1 ? "shells" : "shell"})</h3>
                {shellChart}
            </div>
        </div>
        </Fade>
    )
}

export default withContext(MoreInfoCard)