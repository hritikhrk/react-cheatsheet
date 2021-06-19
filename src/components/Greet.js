import React from 'react'

// const Greet = (props) => {
//     return <h1>Hello {props.name} a.k.a {props.nickName}</h1>;
// }

// const Greet = ({name,nickName}) => {
//     return <h1>Hello {name} a.k.a {nickName}</h1>;
// }

const Greet = (props) => {
    const {name,nickName} = props;
    return <h1>Hello {name} a.k.a {nickName}</h1>;
}


export default Greet;

// export const Greet = () => <h1>Hello Hritik</h1>