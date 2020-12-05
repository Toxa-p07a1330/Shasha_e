import React from 'react'
class Header extends React.Component{
render() {
    let style = {
        height: "10vh",
        width:"100vw",
        backgroundColor: "grey",
        display: "inline-block"
    }
return <div style={style}>
    <h1 style={{color:"darkgrey", paddingLeft:"3%"}}>Название_музыкального_магазина</h1>
</div>
}
}
export default Header;