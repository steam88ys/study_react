import React, { useState, useContext, createContext } from "react"
import ReactDOM from "react-dom"

const LoginUserContext = createContext(null)

function UserInfo(props) {
    const { loginUser } = useContext(LoginUserContext)

    return (
        <div>
            <img src={loginUser.picture} style={{ borderRadius: '50%' }}/>
            <p>username: {loginUser.username}</p>
            <p>email: {loginUser.email}</p>
            <p>cell: {loginUser.cell}</p>
        </div>
    )
}

function UserButton(props) {
    const { loginUser, setLoginUser } = useContext(LoginUserContext)
    const [ fetching, setFetching ] = useState(false)

    const handleLogout = () => {
        setLoginUser(null)
    }

    const handleLogin = () => {
        setFetching(true)
        fetch('https://randomuser.me/api/', { headers: { 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                const login = data.results[0].login
                
                setLoginUser({
                    picture: data.results[0].picture.large,
                    username: login.username,
                    email: data.results[0].email,
                    cell: data.results[0].cell,
                });
                setFetching(false);
            })
    }

    if(loginUser === null) {
        return (
            fetching ?
                <button disabled>...</button> :
                <button onClick={handleLogin}>Login</button>
        )
    }
    else {
        return (
            <div>
                <button onClick={handleLogout}>Logout</button>
                <img src={loginUser.picture} style={{ borderRadius: '50%', width:'1%' }}/> username: {loginUser.username} email: {loginUser.email}
            </div>
        )
    }
    
}

function App() {
    const [ loginUser, setLoginUser ] = useState(null)

    return (
        <LoginUserContext.Provider value={ { loginUser, setLoginUser } }>
            {
                    <div>
                        <UserButton/>
                    </div>
            }
        </LoginUserContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));