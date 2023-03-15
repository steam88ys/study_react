import ReactDOM from 'react-dom'
import React from 'react'

// 함수 인자값을 전달받으면서 비구조화 할당 진행 (구조분해 할당을 파라미터 받으면서 동시에 함)
function SlotMachine (props) {
    const {s1, s2, s3 } = props;
    const patterns = <p>{s1} {s2} {s3}</p>;
    const allSamePattern = s1 === s2 && s2 === s3;
    const shouldHighlight = allSamePattern && s1 === '7';

    return <div>
        {patterns}
        {allSamePattern && <p style={
            shouldHighlight ? {color: 'red'}: null
            }>축하합니다.</p>}
    </div>
    
}

ReactDOM.render(
    <div>
    <SlotMachine s1="X" s2="Y" s3="Z" />
    <SlotMachine s1="X" s2="X" s3="X" />
    <SlotMachine s1="7" s2="7" s3="7" highlight />
    <SlotMachine s1="🍓" s2="🍒" s3="🍍" />
    <SlotMachine s1="🍒" s2="🍒" s3="🍒" />
    </div>
    , document.getElementById("root"));

