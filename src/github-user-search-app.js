import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function UserInfo() {

}

function UserSearchApp() {
    const[username, setUsername] = useState(null)
    const [text, setText] = useState('')
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)

    // 자기 아이디, PAT 토큰값으로 변경
    const PAT = "YOUR PAT HERE"

    useEffect(() => {
        if(username != null) {
            fetch(`https://api.github.com/users/${username}/repos`, { headers: { Authorization: PAT } })
            .then(res => res.json())
            .then(data => {
                // 데이터 설정 및 로딩 상태 갱신
                setRepos(data)
                setLoading(false)
            })
        }
    }, [username])

    return (
        <div>
            <input  type="text" 
                    placeholder="GitHub 아이디 입력" 
                    onChange={e=>setText(e.target.value)} 
                    value={text}/> &nbsp;
            <button onClick={()=> {
                if(text.trim().length != 0) {
                    setUsername(text.trim())
                }
            }}>사용자 검색</button>
            {
                <UserInfo/>
            }
        </div>
    )
}

ReactDOM.render(<UserSearchApp />, document.getElementById("root"))