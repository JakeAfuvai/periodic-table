import React from "react"
import elementsList from "./elements.json"

const AppContext = React.createContext()

export class AppContextProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            elements: elementsList.elements,
            element: {}
        }
    }
    
    getElementCardInfo = name => {
        const foundElement = this.state.elements.find(element => element.name === name)
        foundElement.showModal = !foundElement.showModal
        this.setState({ element: foundElement})
    }
    
    closeElementCardInfo = name => {
        const foundElement = this.state.elements.find(element => element.name === name)
        foundElement.showModal = !foundElement.showModal
        this.setState({ element: {} })
    }

    render() {
        console.log(this.state.showModal)
        return (
            <AppContext.Provider
                value={{
                    ...this.state,
                    getElementCardInfo: this.getElementCardInfo,
                    closeElementCardInfo: this.closeElementCardInfo
                    }}
            >
                    {this.props.children}
            </AppContext.Provider>
        )
    }
}

export const withContext = Component => {
    return props => {
        return (
            <AppContext.Consumer>
                {
                    globalState => {
                        return (
                            <Component 
                                {...globalState} 
                                {...props}
                            />
                        )
                    }
                }
            </AppContext.Consumer>
        )
    }  
}
