import React from 'react'
import {MyContext} from "./Context";
class Reports extends React.Component{
    render() {
        let style = {

        }
        return (
            <div style={style}>
                <MyContext.Consumer>
                    {(context)=>{
                        return <div style={{display: "block", width: "80%", marginLeft: "20%"}}>

                            <h3>Отчеты о доходах</h3>
                            <div>
                                {context.data.ProfitReport.map((val)=>{
                                    let sellerId = context.data.Seller.filter((o)=>{return o.id === val.sellerId})[0];
                                    return <div style={{display: "inline-block", padding: "2%", border: "1px solid white",
                                        width: "20%"}}>
                                        <div>Дата: {val.date}</div>
                                        <div>Продавец: {sellerId.tName}</div>
                                        <div>Чистая прибыль(ожидаемая): {val.cProfit}</div>
                                        <div>Чистая прибыль(фактическая): {val.fProfit}</div>
                                        <div>Потери:{val.losses}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default Reports