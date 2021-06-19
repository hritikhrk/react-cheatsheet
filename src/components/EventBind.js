import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        //Binding in Constructor    //best option
        // this.clickHandler = this.clickHandler.bind(this)
    }


    // clickHandler() {
    //     console.log("CLickTHis: "+this===window);
    //     this.setState({
    //         message: 'Good Bye'
    //     })
    // }

    //Class property as arrow function
    clickHandler = () => {
        this.setState({
            message: 'GoodBye!'
        })
    }


    // render() {
    //     console.log(this);
    //     return (
    //         <div>
    //             <div>{this.state.message}</div>
    //             <button onClick={this.clickHandler}>Click Event Binding</button>
    //         </div>
    //     )
    // }

    //Binding in Render()
    // render() {
    //     console.log(this);
    //     return (
    //         <div>
    //             <div>{this.state.message}</div>
    //             <button onClick={this.clickHandler.bind(this)}>Click Event Binding</button>
    //         </div>
    //     )
    // }

    //ArrownFunc in Render()
    // render() {
    //     console.log(this);
    //     return (
    //         <div>
    //             <div>{this.state.message}</div>
    //             <button onClick={() => this.clickHandler()}>Click Event Binding</button>
    //         </div>
    //     )
    // }

    render() {
        console.log(this);
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click Event Binding</button>
            </div>
        )
    }
}

export default EventBind
