import ReactDOM from 'react-dom'
import React from 'react'

// 함수 인자값을 전달받으면서 비구조화 할당 진행 (구조분해 할당을 파라미터 받으면서 동시에 함)
function SlotMachine (props) {
    const {s1, s2, s3 } = props.fruit;
    const highlight = props.highlight;
    
    if( s1===s2 && s2===s3) {
        if(s1==="7") {
            highlight = true;
        }
        return (
            <div className='person' style={highlight ? {color: 'red'} : null}>
                <h1>Congrats!</h1>
            </div>
        )
    }
    else {
        return (
            <div>{s1}{s2}{s3}</div>
        );
    }
    
}

const myfruit= { 
    s1:"7",
    s2:"7",
    s3:"7"
};

ReactDOM.render(<SlotMachine fruit={myfruit} highlight />, document.getElementById("root"));
