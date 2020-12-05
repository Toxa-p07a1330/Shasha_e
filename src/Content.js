import {MyContext} from "./Context";
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import React from 'react'

class Content extends React.Component{

    render() {
        let style = {
        }
        return(<div style={style}>
            <BrowserRouter>
                <Switch>

                </Switch>
            </BrowserRouter>
        </div>)
    }
}
export default Content;