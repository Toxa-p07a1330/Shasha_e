import React from 'react'
import {MyContext} from "./Context";
class Sellers extends React.Component{
    render() {
        let style = {

        }
        return (
            <div style={style}>
                <h2>Продавцы</h2>
                <MyContext.Consumer>
                    {(context)=>{
                        console.log("CCCCCC")
                        console.log(context)
                        return <div>
                            {context.data.Seller.map((value)=>{
                                return<div style={{display: "inline-block", padding: "2%", border: "1px solid white",
                                width:"20%"}}>
                                    <div >
                                        <img style={{width:"80%", float: "left"}} src={value.photo} alt={""}/>
                                    </div>
                                    <br/>
                                        <div>
                                            <div>Фамилия:{value.fName}</div>
                                            <div>Имя;{value.sName}</div>
                                            <div>Отчетсво:{value.tName}</div>
                                            <div>Телефон:{value.phone}</div>
                                        </div>
                                </div>

                            })}
                        </div>
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default Sellers