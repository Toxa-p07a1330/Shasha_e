import React from 'react'
let Admin = ()=>{
    let style = {
        display: "block",
        width: "80%",
        padding: "2%",
        marginLeft: "10%",
        textAlign: "center",
        paddingTop:"-30%"
    }
    const password = "pass";
    let putResponse = ()=>{
        let pass = prompt("Введите пароль");
        if (pass !== password){
            alert("Неверный пароль")
            return null
        }

        let request = "http://localhost:3001/" + document.getElementById("input").value;
        fetch(request).then(
            response=>{
                response.text().then(
                    text =>{
                        document.getElementById("response").innerHTML=text
                        console.log(JSON.stringify(text))
                    },
                    reason => {
                        document.getElementById("response").innerHTML=JSON.stringify(reason);
                        console.log(JSON.stringify(reason))
                    }
                )
            },
            reason => {
                document.getElementById("response").innerHTML=JSON.stringify(reason);
                console.log(JSON.stringify(reason))
            }
        )
    }
    return <div style={style}>
        Поле ввода команд для администратора<br/>
        <input type={"text"} id={"input"}/><br/>
        <button onClick={()=>{putResponse();}}>Выполнить</button><br/>
        <div id={"response"}> </div>
        <div onClick={()=>{
            for(let i =0; i<20; i++){
                let amount = Math.floor(Math.random()*100+100);
                let price = Math.floor(Math.random()*1000+3000);
                let itemId= Math.floor(Math.random()*10)+1;
                let data = (new  Date()).toString().split("G")[0];
                let sellerId = Math.floor(Math.random()*5)+1
                let cPrfit = Math.floor(Math.random()*10000)+15000;
                let losses = Math.floor(cPrfit*Math.random())
                let fProfit = cPrfit - losses;
                let t = price*amount;
                let fetcher = "http://localhost:3001/insert into " +
                    "wasteReport (date,sellerId, itemId, startCount, soldCount, leftCount, buyPrice, sellTotalPrice) values" +
                    `('${data}',${sellerId}, ${itemId},${cPrfit},${fProfit},${losses},${price},${price*fProfit})`;
                fetch(fetcher)
                console.log(fetcher)
            }
            alert("Done!")


        }} style={{display:""}}>Генер</div>
    </div>
}
export default Admin