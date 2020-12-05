import React from 'react'
import {MyContext} from "./Context";
class Home extends React.Component{
    render() {
        let style = {

        }
        return (
            <div style={style}>
                <h2>Домашняя страница</h2>
                <MyContext.Consumer>
                    {(context)=>{
                        return <div>
                           Некоторое текстовое описание проекта
                        </div>
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default Home