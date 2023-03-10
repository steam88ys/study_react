import ReactDOM from 'react-dom'
import React from 'react'

const Child = (props) => <div>{props.children}</div>

ReactDOM.render(
    // Child는 div임
    <Child> 
        <h1>Title</h1>
        <div>React</div>
        <ol>
            <li>item 1</li>
            <li>item 2</li>
        </ol>
        <Child>Inner Child</Child>
    </Child>, 
document.getElementById("root"));