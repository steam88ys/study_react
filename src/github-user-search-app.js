import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

function UserInfo(props) {
    const user = props.user;
    return <div>
        id: {user.login}<br/>
        name: {user.name}<br/>
        <img style={{width:200, height:200}} src={user.avatar_url}/>
    </div>
}

function UserSearchApp(){
    const [username, setUsername] = useState(null)
    const [text, setText] = useState('')
    const [loading, setLoding] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(false)
    const PAT = "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"

    useEffect(() => {
        if(username!=null){
            //네트워크로 요청 보내서 유저 정보 가져오기
            setLoding(true)
            fetch(`https://api.github.com/users/${username}`, 
                {headers: {Authorization: "token " + PAT}})
                .then(res => {
                    if(res.status != 200) {
                        throw new Error()
                    } else {
                        return res.json()
                    }
                })
                .then(json => {
                    setLoding(false)
                    setUser(json)
                    setError(false)
                })
                .catch((e) => {
                    setLoding(false)
                    setUser(null)
                    setError(true)
                })
        }
    }, [username])
    
    if(loading) return <div> 유저 정보를 불러오는 중입니다. </div>

    return(
        <div>
            <input type="test"
            placeholder="Github 아이디 입력"
            onChange={e => setText(e.target.value)}
            value = {text}/>&nbsp;
            <button onClick={() =>{
                if(text.trim().length != 0){
                    setUsername(text.trim())
                }
            }}>사용자 검색</button> 
            { error ? <p>에러가 발생했습니다.</p>
                :
                    user === null ? 
                    <p>검색한 유저가 없습니다.</p> : 
                    <UserInfo user={user}/> }
        </div>
    )
}
ReactDOM.render(<UserSearchApp />, document.getElementById("root"))