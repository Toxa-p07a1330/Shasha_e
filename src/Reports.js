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
                        return <div>
                            <h3>Отчеты о расходах</h3>
                            <div>
                                {context.data.WasteReport.map((val)=>{
                                    let sellerId = context.data.Seller.filter((o)=>{return o.id === val.sellerId})[0];
                                    let itemId = context.data.Items.filter((o)=>{return o.id === val.itemId})[0];
                                    return <div style={{display: "inline-block", padding: "2%"}}>
                                        <div>Дата: {val.date}</div>
                                        <div>Продавец: {sellerId.sName}</div>
                                        <div>Товар: {itemId.name}</div>
                                        <div>Начальное количество:{val.startCount}</div>
                                        <div>Проданное количество: {val.soldCount}</div>
                                        <div>Оставшеся количество: {val.LeftCount}</div>
                                        <div>Закупочная цена: {val.buyPrice}</div>
                                        <div>Тотальная цена продажи: {val.sellTotalPrice}</div>
                                    </div>
                                })}
                            </div>
                            <h3>Отчеты о доходах</h3>
                            <div>
                                {context.data.ProfitReport.map((val)=>{
                                    let sellerId = context.data.Seller.filter((o)=>{return o.id === val.sellerId})[0];
                                    return <div style={{display: "inline-block", padding: "2%"}}>
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