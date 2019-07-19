import React from "react"
import MoreInfoCard from "./MoreInfoCard"
import { withContext } from "./AppContext"
import "./Element.css"

const Element = props => {
    const {name, number, symbol, atomic_mass, category} = props.element
    
    return (
        <div id={category.split(" ")[0]} className={`element-container ${category}`} style={{gridArea: `${symbol}`}}>
            <div className="element" onClick={()=>props.getElementCardInfo(name)}>
                <span className="element-number">{number}</span>
                <span className="element-atomic-mass">{atomic_mass.toFixed(3)}</span>
                <span className="element-symbol">{symbol}</span>
                <span className="element-name">{name}</span>
            </div>
            {props.element.name && props.element.showModal &&
                <MoreInfoCard />
            }
        </div>
    )
}

export default withContext(Element)