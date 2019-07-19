import React from "react"
import Element from "./Element"
import { withContext } from "./AppContext"
import "./PeriodicTable.css"

const PeriodicTable = props => {
    const mappedElements = props.elements.map(element => 
            <Element
                key={element.name}
                element={element}
            />
        )
    return (
        <div className="periodic-table-container">
            {mappedElements}
        </div>
    )
} 

export default withContext(PeriodicTable)