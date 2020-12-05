import React from 'react'
import {MyContext} from "./Context";
class Menu extends React.Component{
    render() {
        let  style = {
            display:"inline-block",
            width:"15vw",
            height:"!00%",
            left: "0",
            float:"left",
            textDecoration: "none",
            margin: "25px",

        }
        return (
            <div style={style}>
                <MyContext.Consumer>
                    {()=>{
                        let styleLink = {
                            border: "1px solid white",
                            padding:"1%",
                            color:"black",
                            backgroundColor: "#87CEEB",
                            width: "100%    ",
                            display: "block"
                        }
                        return (
                            <div style={{textAlign: "center", lineHeight: "2", paddingLeft:"3%"}}>
                                <a href={"/"} style={styleLink}>Домашняя страница</a><br/>
                                <a href={"/sellers"} style={styleLink}>Продавцы</a><br/>
                                <a href={"/items"} style={styleLink}>Товары</a><br/>
                                <a href={"/sellMagazin"} style={styleLink}>Журнал продаж</a><br/>
                                <a href={"/reports"} style={styleLink}>Отчеты</a><br/>
                                <a href={"/admin"} style={styleLink}>Панель админимстратора</a><br/>
                                <a href={"/places"} style={styleLink}>Места</a><br/>
                                <a href={"/admin"} style={styleLink}>Панель администратора</a><br/>
                            </div>)
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default Menu
