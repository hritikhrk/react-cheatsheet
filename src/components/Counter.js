import React, { Component } from 'react'

class Counter extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increament() {
        // this.setState({
        //     count: this.state.count + 1
        // },()=>console.log("CallBack value: " + this.state.count))
        // console.log(this.state.count);

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }

    increamentFIve(){
        this.increament();
        this.increament();
        this.increament();
        this.increament();
        this.increament();
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=>this.increamentFIve()}>Increament</button>
            </div>
        )
    }
}

export default Counter;
