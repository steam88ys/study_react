// useState 함수 불러오기
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const UserProfile = function(props) {
    // useState 함수(훅)을 사용하여 상태 및 상태 변경 함수 불러오기 (초기값 주기)
    const [userName, setName] = useState("김윤서")
    const [userAge, setAge] = useState(19)
    const [emailAddress, setEmail] = useState("s2102@e-mirim.hs.kr")

    return (
        <div>
            <h3>이름: {userName}</h3>
            <h3>나이: {userAge}</h3>
            <h3>이메일: {emailAddress}</h3>
        </div>
    )
}

ReactDOM.render(<UserProfile />, document.getElementById("root"))