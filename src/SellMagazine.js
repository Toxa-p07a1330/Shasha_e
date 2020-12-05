import React from 'react'
import {MyContext} from "./Context";
class SellMagazine extends React.Component{
    render() {
        let style = {

        }
        return (
            <div style={style}>
                <h2>Журнал продаж</h2>
                <MyContext.Consumer>
                    {(context)=>{
                        return <div style={{display: "inline-block"}}>
                            {context.data.SellMagazine.map((value)=>{

                                return <div style={{display: "block", padding: "2%",  border: "1px solid white"}}>
                                    <div>Дата: {value.date}</div>
                                    <div>Доход(по дням):{value.profit}</div>
                                </div>
                            })}
                        </div>
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default SellMagazine