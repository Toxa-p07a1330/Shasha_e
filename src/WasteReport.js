import React from 'react'
import {MyContext} from "./Context";
class WasteReport extends React.Component{
    render() {
        let style = {

        }
        return (
            <div style={style}>
                <MyContext.Consumer>
                    {(context)=>{
                        return <div style={{display: "block", width: "80%", marginLeft: "20%"}}>
                            <h3>Отчеты о расходах</h3>
                            <div style={{display: "block"}}>
                                {context.data.WasteReport.map((val)=>{
                                    let sellerId = context.data.Seller.filter((o)=>{return o.id === val.sellerId})[0];
                                    let itemId = context.data.Items.filter((o)=>{return o.id === val.itemId})[0];
                                    return <div style={{display: "inline-block", padding: "2%", border: "1px solid white",
                                        width: "20%"}}>
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
                        </div>
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default WasteReport