let lst = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Paul" },
]
// lst.push({ id:4, name:"Ken" })   // 기존 배열에 내용 추가
let newLst = lst.concat({ id:4, name:"Ken" })    // 새로운 배열에 내용 추가
console.log(lst);

newLst2 = []
lst.forEach(item => newLst2.push(item));
newLst2.push({id:4, name:"Ken"})
console.log(newLst2);



let updatedId = 2
let updatedName = "Smith"
let updatedLst = lst.map(item => {
    if(item.id === updatedId) {
        // map-> 다음과 같이 객체를 직접 변경하지 않고 (원본 리스트는 불변!)
        // item.name = updatedName

        // 전개 연산자를 이용하여 값 복사 후 덮어쓰기 전략으로 새 객체를 생성하여 대입하기
        item = { ...item, name: updatedName }
    }
    return item
})
console.log("map =====")
console.log(lst) // 원본에 영향 X
console.log(updatedLst) // 새로운 객체
console.log(lst === updatedLst) // false


const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map((number) => <li>{number}</li>)
const listItems2 = numbers.map((number) => <NumberItem item = {number}/>)   // 같은 코드임