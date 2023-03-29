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
            <div>
                {props.item.name} 수량: {props.item.count}
                &nbsp;&nbsp;&nbsp;

                <button onClick={()=> {
                    props.handleCountChange(props.item.id, 1)
                }}>+</button>&nbsp;

                <button onClick={()=> {
                    props.handleCountChange(props.item.id, -1)
                }}>-</button>&nbsp;
                 
                <button onClick={() => {
                    props.handleItemRemove(props.item.id)
                }}>x</button>
            </div>  {/* 문자열을 div로 감싼 문자열로 변경 */}
        </div>
    )
}

function CartApp(props) {
    const [itemlist, setItemList] = useState([
        { id: v4(), name: "辛라면", count: 5},
        { id: v4(), name: "생수(500ml)", count: 2}
    ])
    const addListItem = (name) => setItemList(list => list.concat({ id: v4(), name, count:1 })) // name: name처럼 이름과 속성이 같으면 생략 가능
    const addItemCount = (id, amount) => setItemList(list => {
        return list.map(item => {       // map-> 다음과 같이 객체를 직접 변경하지 않고 (원본 리스트는 불변!)
            if(item.id === id) {
                item = {...item, count: item.count + amount}
            }
            return item
        })
    })
    const removeListItem = (id) => setItemList(list => {
        return list.filter(item => {
            return item.id !== id
        })
    })

    return (
        /* jsx */
        <div>
            <Input onButtonClick={addListItem} inputPlaceholder="추가할 항목을 입력하세요." buttonLabel="추가" buttonColor="white"/>
            { itemlist.map(item => <CartItem 
            handleCountChange={addItemCount}
            handleItemRemove={removeListItem}
            item={item}/>) }  {/* 문자열을 div로 감싼 문자열로 변경 */}
        </div>
    )
}

ReactDOM.render(<CartApp />, document.getElementById("root"))