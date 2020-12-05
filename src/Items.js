import React from 'react'
import {MyContext} from "./Context";
class Items extends React.Component{
    render() {
        let style = {

        }
        return (
            <div style={style}>
                <h2>Товары</h2>
                <MyContext.Consumer>
                    {(context)=>{
                        return <div style={{display: "inline-block"}}>
                            {context.data.Items.map((value)=>{
                                return <div style={{padding: "2%", display: "block"}}>
                                    <div>Название:{value.name}</div>
                                    <div>Цена:{value.price}</div>
                                    <div>Количество в наличии: {value.amount}</div>
                                </div>
                            })}
                        </div>
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default Items