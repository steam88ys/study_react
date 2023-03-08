import ReactDOM from 'react-dom/client';

const name = "John";
const element = <h1>Hello, {name}</h1>;

const lst = [100, 200, 300];
const person = {
    name: 'John',
    age: 20
}

function double(value) {
    return value * 2;
}

const el = <div>
    {true}
    {false}
    {undefined}
    {null}
</div>

/* 순수 javascript 부분 주석 */
const JSXwithExpressions = (
    <h1>   
    {/* jsx 부분 주석 */}
    {lst[0]}
    &nbsp;{person.name}
    &nbsp;{person.age}
    &nbsp;{2 + 2}
    &nbsp;{person.name.toUpperCase()}
    &nbsp;{person.name.length}
    &nbsp;{double(person.age)}
    </h1>)

const unreadMessages = ["hello"];
const el2 = <div>
    <h1>Hello!</h1>
    {/* &&은 마지막에 평가한 값을 return 함 */}
    {
        unreadMessages.length > 0 &&    
        <h2>You have {unreadMessages.length} unread messages.</h2>
    }
</div>

/* 속성을 javascript 쓰려면 {} + 객체여서 {} ->  {{color: "red"}} */
const el3 = <h1 style={{color: "red", backgroundColor:"blue"}}>Hello Style!</h1>;
/* background-color -를 빼기로 인식 -> 카멜케이스로 바꿈 */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(el3);


