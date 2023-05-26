// 3102 김윤서



import React, { useState} from 'react'
import ReactDOM from "react-dom"
import styled from 'styled-components';

function Greeting(props) {
    const {prefix, target } = props;
    return (
        <div>
            <div>{props.prefix + " " + props.target}</div>
        </div>
    )
}
//ReactDOM.render(<Greeting prefix="Hello" target="Yu Byung Suk" />, document.getElementById('root'))



function ToggleButton(props) {
    const [toggle, setToggle] = useState(true)
    const [text, setText] = useState("on")
    
    return <div>
        <button onClick={() => {
            setToggle(s => !s)
            if(toggle==true)setText("off");
            else if(toggle==false)setText("on");
        }}>{text}</button>
        
    </div>
}
//ReactDOM.render(<ToggleButton/>, document.getElementById('root'))



function randomHex() {
    return (Math.floor(Math.random() * (15 - 1 + 1) + 1)).toString(16);
}
function RandomColorPicker(props) {
    const [color, setColor] = useState('black')

    const changeColor = () => { // 할 일 지우기
        <p style={{width:50, height:50, background: color}}></p>
    }

    return <div>
        <p style={{width:50, height:50, background: color}}></p>
        <button onClick={(changeColor) => {
            setColor ('#'+randomHex()+randomHex()+randomHex()+randomHex()+randomHex()+randomHex());
        }}>pick</button>
    </div>
}

//ReactDOM.render(<RandomColorPicker/>, document.getElementById('root'))

