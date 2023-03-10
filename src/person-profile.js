import ReactDOM from 'react-dom'
import React from 'react'

// 함수 인자값을 전달받으면서 비구조화 할당 진행 (구조분해 할당을 파라미터 받으면서 동시에 함)
function PersonProfile (props) {
    const {name, age, gender, profile } = props.person;
    const highlight = props.highlight;
    
    return (
        <div className='person' style={highlight ? {color: 'red'} : null}>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}

const myperson = { 
    name:'royal44', 
    age: 19 ,
    gender:'male',
    profile:'http://ticketimage.interpark.com/PlayDictionary/DATA/PlayDic/PlayDicUpload/040004/21/06/0400042106_47800_02.711.gif'
};

ReactDOM.render(<PersonProfile person={myperson} highlight />, document.getElementById("root"));