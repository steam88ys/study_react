import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Counter(props) {
    const [count, setCount] = useState(0)
    console.log('(from Counter) count : ', count)

    const brokenAdd5 = () => {
        for (let i = 0; i < 5; i++) {
            console.log('(from brokenAdd5) count : ', count)
            setCount(count + 1)
            // setCount(1) 호출 5번
        }
    }

    const normalAdd5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prev => {
                console.log('(from normalAdd5) prev : ', prev)
                return prev + 1
                // 이전 상태값이 넘어와서 prev가 0, 1, 2, 3, 4 로 넘어감
            })
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={brokenAdd5}>Broken Add 5</button>
            <button onClick={normalAdd5}>Normal Add 5</button>
        </div>
    )
}

ReactDOM.render(<Counter />, document.getElementById("root"))