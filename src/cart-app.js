import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { v4 } from 'uuid'   // 랜덤한 값 생성해줌

function Input(props) {
    const [text, setText] = useState("");
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    return (
        <div>
            <input type="text" placeholder={props.inputPlaceholder} onChange={handleChange} value={text}/> &nbsp;
            <button onClick={() => {
                props.onButtonClick(text)
                setText("");
            }} style={{background:props.buttonColor}}>{props.buttonLabel}</button>
        </div>
    )
}

function CartItem(props) {
    return (
        /* jsx */
        <div>
            <div>{props.item.name} 수량: {props.item.count}</div>  {/* 문자열을 div로 감싼 문자열로 변경 */}
        </div>
    )
}

function CartApp(props) {
    const [itemlist, setItemList] = useState([
        { id: v4(), name: "라면", count: 5},
        { id: v4(), name: "생수(500ml)", count: 2}
    ])
    const addListItem = (name) => setItemList(list => list.concat({ id: v4(), name, count:1 })) // name: name처럼 이름과 속성이 같으면 생략 가능
    return (
        /* jsx */
        <div>
            <Input onButtonClick={addListItem} inputPlaceholder="추가할 항목을 입력하세요." buttonLabel="추가" buttonColor="white"/>
            { itemlist.map(item => <CartItem item={item}/>) }  {/* 문자열을 div로 감싼 문자열로 변경 */}
        </div>
    )
}

ReactDOM.render(<CartApp />, document.getElementById("root"))