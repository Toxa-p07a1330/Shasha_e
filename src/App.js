import  React from 'react'
import Context, {MyContext} from "./Context";
import Content from "./Content";
import Header from "./Header";
import Menu from "./Menu";
class App extends React.Component{
    constructor() {
        super();
        this.state  ={
            IncomeReport: null,
            Items: null,
            ProfitReport: null,
            SellMagazine: null,
            Seller: null,
            WasteReport: null,
            isLoaded: false
        }


    }
    render() {
        return (<div style={{backgroundColor: "#78866b", color: "#c1caca", minHeight: "100vh"}}>
                {(()=>{
                    if (!this.state.isLoaded)
                    {
                        let basicString = "http://localhost:3001/";
                        let tables = ["IncomeReport", "Items", "ProfitReport","SellMagazine", "Seller", "WasteReport"]
                        for (let i of tables)
                        {
                            if (this.state[i] == null){
                                fetch(basicString+"select * from "+i).then(
                                    (resolve)=>{
                                        resolve.json().then(
                                            (json)=>{
                                                let newState = this.state;
                                                newState[i] = json;
                                                console.log(i)
                                                console.log(json)
                                                let keys = [];
                                                for (let i in this.state)
                                                    keys.push(this.state[i]);
                                                console.log(keys)
                                                console.log("arrr")
                                                newState.isLoaded = (keys.filter((o)=>{ return o === null}).length === 0)
                                                this.setState(newState);

                                            }, reason => {
                                                console.log(reason)
                                            })
                                    },
                                    (reject)=>{
                                       console.log(reject)
                                    })
                            }
                        }
                        return "Loading";
                    }
                    console.log("_____")

                    return (
                        <div>
                            <MyContext.Consumer>
                                {(context)=>{
                                    context.setData(this.state)
                                    console.log(context)
                                    return (
                                        <div>
                                            <Header/>
                                            <Menu/>
                                            <Content/>
                                    </div>)
                                }}
                            </MyContext.Consumer>
                        </div>
                    )
                })()}
            </div>
        )

    }
}

export default App;
