import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

function KanyeQuote(props) {
    const user = props.quote;
    return (
        <div>
            quote: {props.quote}
        </div>
    )
}

function KanyeApp() {
    const [btn, setBtn] = useState(false);
    const [quote, setQuote] = useState(null);
    
    useEffect(() => {
        fetch("https://api.kanye.rest/")
        .then(res => {
            return res.json()
        })
        .then(json => {
            setQuote(json.quote)
        })
    }, [btn])

    return (
        <div>
            {quote===null ? null : <KanyeQuote quote={quote}/>}
            <br></br>
            <button onClick={() =>{setBtn(btn => !btn)}}>
            칸예 명언 보기</button> 
        </div>
       
    )
}

ReactDOM.render(<KanyeApp />, document.getElementById("root"))