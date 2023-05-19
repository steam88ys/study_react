import { useState, useCallback, useMemo } from "react"
import ReactDOM from "react-dom"

const UserManageApp = () => {
    const [users, setUsers] = useState([
        { name: "John", age: 23 },
        { name: "Jane", age: 18 },
        { name: "Paul", age: 43 },
        { name: "Sally", age: 14 },
    ])
    const [name, setName] = useState('')
    const [age, setAge] = useState()

    const addUser = useCallback(() => {
        setUsers((list) => list.concat({ name, age }));
        setName('');
        setAge('');
    }, [name, age])

    const minorCount = useMemo(() => {
        return users.filter(u => u.age < 20).length;
    }, [users])

    const minorNames = useMemo(() => {
        return users.filter(u => u.age < 20).map(u => u.name);
    }, [users])

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(parseInt(e.target.value));
    }

    return (
        <div>
            <div>
                <label>이름</label> <input type="text" value={name} onChange={handleNameChange} /><br />
                <label>나이</label> <input type="number" value={age} onChange={handleAgeChange} /><br />
                <button onClick={addUser}>회원 추가</button>
            </div>
            <hr />
            <div>미성년자 회원 수 : {minorCount}</div>
            <div>미성년자 회원 이름 : {JSON.stringify(minorNames)}</div>
            <ul>
                {users.map((u, index) => (
                    <li key={index}>이름: {u.name}, 나이: {u.age}</li>
                ))}
            </ul>
        </div>
    )
}

ReactDOM.render(<UserManageApp />, document.getElementById('root'))
