import React, { Component } from 'react'

class RefsDemo extends Component {
    // 1st method
    // constructor(props) {
    //     super(props)
    //     this.inputRef = React.createRef()
    // }

    //2nd method
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        // this.inputRef.current.focus()
        // console.log(this.inputRef);
        if(this.cbRef)
        this.cbRef.focus()
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default RefsDemo
