import ReactDOM from 'react-dom'
import React from 'react'

function Greeting(props) {
    //const name = props.name;
    const {name} = props;   // 구조분해 할당
    return <h1>Hello, {name}</h1>
}

ReactDOM.render(<Greeting name="윤서"/>, document.getElementById("root"))
