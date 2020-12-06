import React from 'react'
class Header extends React.Component{
render() {
    let style = {
        height: "10vh",
        width:"100vw",
        backgroundColor: "DarkGreen",
        display: "inline-block"
    }
return <div style={style}>
    <h1 style={{color:"lightgreen", paddingLeft:"3%"}}>Название_магазина_одежды</h1>
</div>
}
}
export default Header;