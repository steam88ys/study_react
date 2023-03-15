// useState 함수 불러오기
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StateDemoComponent = function(props) {
    // 저장할 상태값과 관련된 제약이 없으므로 객체도 저장 가능
    const [state, setState] = useState({
        value1: "hello",
        value2: 1000
    })
    /* 객체는 주소값을 비교함, 주소값이 다를 때 리랜더 */
    return (
        <div>
            <button onClick={() => {
                if(state.value1 === "hello") {
                    // 기존 객체를 복사하는 과정에서 새롭게 값을 갱신해주는 것을 확인 가능
                    setState( { ...state, value1: "bye" } ) // 새 객체임 (복사하고 bye 넣어줌, 리랜더 유도)
                } else {
                    setState( { ...state, value1: "hello" } )
                }
            }}>{state.value1}</button>
            <br />
            <button onClick={() => {
                setState({ ...state, value2: state.value2 * 2 } )
            }}>{state.value2}</button>
        </div>
    )
}

ReactDOM.render(<StateDemoComponent />, document.getElementById("root"))