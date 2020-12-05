import {MyContext} from "./Context";
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Items from "./Items";
import Sellers from "./Sellers";
import SellMagazine from "./SellMagazine";
import Reports from "./Reports";
import Home from "./Home";
import Admin from "./Admin";

class Content extends React.Component{

    render() {
        let style = {
        }
        return(<div style={style}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/items"} component={Items} />
                    <Route path={"/sellers"} component={Sellers}/>
                    <Route path={"/sellMagazine"} component={SellMagazine}/>
                    <Route path={"/reports"} component={Reports}/>
                    <Route path={"/admin"} component={Admin}/>
                    <Route exact path={"/"} component={Home}/>
                </Switch>
            </BrowserRouter>
        </div>)
    }
}
export default Content;