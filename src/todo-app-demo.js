import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const TodoItem = function({ todo: { completed, text }, idx, handleTodoStatusToggle, handleTodoRemove }) { 
    return (
        <div>
            <span style={completed ? { textDecoration: 'line-through' } : null} // 클릭하면 중간에 줄 생김
                onClick={() => handleTodoStatusToggle(idx)}>
                {text}
            </span>&nbsp;
            <button onClick={() => handleTodoRemove(idx)}>삭제</button>
        </div>
    )
}

const TodoList = function({ todos, handleTodoStatusToggle, handleTodoRemove }) {
    return (
        <ol>
            {
                todos.map((todo, idx) => {
                    return (
                        <li key={idx}>
                            <TodoItem idx={idx} todo={todo}
                                handleTodoStatusToggle={handleTodoStatusToggle}
                                handleTodoRemove={handleTodoRemove} />
                        </li>
                    )
                })
            }
        </ol>
    )
}

const TodoAdder = function({ handleTodoAdd }) { // 할 일 추가
    const [input, setInput] = useState("")
    const handleChange = (e) => setInput(e.target.value)    // e는 input 태그를 참조함 (value값 나옴)
    return (    
        <div>   
            <input type='text' onChange={handleChange} value={input} /> {/* 내용이 바뀌었을 때 */}
            <button onClick={() => {
                handleTodoAdd({ completed: false, text: input })
                setInput("")
            }}>추가</button>
        </div>
    )
}

const TodoApp = function(props) {
    const [todos, setTodos] = useState([
        { completed: false, text: '리액트 공부하기' },
        { completed: true, text: 'ES6 문법 공부하기' }
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
    const handleTodoRemove = todoIndex => { // 할 일 지우기
        setTodos(todos => {
            return todos.filter((_, idx) => {
                return idx !== todoIndex
            })
        })
    }

    return (
        <div>
            <TodoList todos={todos}
                handleTodoStatusToggle={handleTodoStatusToggle}
                handleTodoRemove={handleTodoRemove}/>
            <TodoAdder handleTodoAdd={handleTodoAdd} />
        </div>
    )
}

ReactDOM.render(<TodoApp />, document.getElementById("root"))