import React, { useState} from 'react'
import ReactDOM from "react-dom"
import styled from 'styled-components';


// 문제1
function Greeting(props) {
    return <h1>{props.prefix} {props.target}</h1>
}
//ReactDOM.render(<Greeting prefix="Hello" target="Yu Byung Suk" />, document.getElementById('root'))


// 문제2
function ToggleButton(props) {
    const [toggle, setToggle] = useState(true)
    
    return (
        <button onClick={ () => setToggle(s => !s) }>
            {toggle ? "on" : "off"}
        </button>
    )
}
//ReactDOM.render(<ToggleButton/>, document.getElementById('root'))


// 문제3
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
        <button onClick={() => {
            let randomColor='#'
            for(let i=0; i<6; i++) {
                randomColor += randomColor();
            }
            setColor(randomColor)
        }}>pick</button>
    </div>
}
//ReactDOM.render(<RandomColorPicker/>, document.getElementById('root'))


// 문제4
function PasswordInput (props) {
    const [text, setText] = useState();
    const [show, setShow] = useState(true);

    let result="";
    if(!show) {
        for(let i=0; i<text.length; i++) {
            result += "*";
        }
    }else {
        result = text;
    }

    return <div>
        <input type="text" 
        value={result}
        onChange={e => setText(e.target.value)} />
        <button onClick={() => {
            setShow(true)
        }}>show</button>
        <button onClick={() => {
            setShow(false)
        }}>hide</button>
    </div>
}
//ReactDOM.render(<PasswordInput/>, document.getElementById('root'))


// 문제5
function RatingStar(props) {
    const [rating, setRating] = useState(1)

    const stars = []
    for(let i=1; i<6; i++) {
        stars.push(
            <span onClick={()=>setRating(i)}>{ i > rating ? "☆" : "★" }</span>
        )
    }

    return <div>{stars}</div>
}
ReactDOM.render(<RatingStar/>, document.getElementById('root'))
