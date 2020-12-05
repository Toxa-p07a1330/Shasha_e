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
                        return <div>
                            {context.data.SellMagazine.map((value)=>{

                                return <div style={{display: "block", padding: "2%"}}>
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