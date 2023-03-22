import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const CartItem = function({ todo: { completed, text, su }, idx, handleTodoStatusToggle, handleTodoplus, handleTodominus, handleTodoRemove }) { 
    return (
        <div>
            <span  // 클릭하면 중간에 줄 생김
                onClick={() => handleTodoStatusToggle(idx)}>
                {text} 수량:{su}
            </span>&nbsp;&nbsp;&nbsp;
            <button onClick={() => handleTodoplus(idx)}>+</button>&nbsp;
            <button onClick={() => handleTodominus(idx)}>-</button>&nbsp;
            <button onClick={() => handleTodoRemove(idx)}>X</button>
        </div>
    )
}

const CartList = function({ todos, handleTodoStatusToggle, handleTodoRemove }) {
    return (
        <ol>
            {
                todos.map((todo, idx) => {
                    return (
                        <li key={idx}>
                            <CartItem idx={idx} todo={todo}
                                handleTodoStatusToggle={handleTodoStatusToggle}
                                handleTodoRemove={handleTodoRemove} />
                        </li>
                    )
                })
            }
        </ol>
    )
}

const CartAdder = function({ handleTodoAdd }) { // 할 일 추가
    const [input, setInput] = useState("")
    const handleChange = (e) => setInput(e.target.value)    // e는 input 태그를 참조함 (value값 나옴)
    return (    
        <div>   
            <input type='text' onChange={handleChange} value={input} /> {/* 내용이 바뀌었을 때 */}
            <button onClick={() => {
                handleTodoAdd({ completed: false, text: input })
                setInput("")
            }}>넣기</button>
        </div>
    )
}

const CartApp = function(props) {
    const [todos, setTodos] = useState([
        { completed: false, text: '사과' },
        { completed: true, text: '삼겹살' }
    ])

    const handleTodoAdd = newTodo => setTodos(todos => todos.concat(newTodo))
    const handleTodoStatusToggle = todoIndex => {
        setTodos(todos => {
            return todos.map((todo, idx) => {
                if(idx === todoIndex) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        })
    }
    
    const handleTodoplus = todoIndex => {
        setTodos(todos => {
            return su++;
        })
    }
    const handleTodominus = todoIndex => {
        setTodos(todos => {
            return su--;
        })
    }
    const handleTodoRemove = todoIndex => { // 할 일 지우기
        setTodos(todos => {
            return todos.filter((_, idx) => {
                return idx !== todoIndex
            })
        })
    }

    return (
        <div>
            <CartList todos={todos}
                handleTodoRemove={handleTodoRemove}/>
            <CartAdder handleTodoAdd={handleTodoAdd} />
        </div>
    )
}

ReactDOM.render(<CartApp />, document.getElementById("root"))