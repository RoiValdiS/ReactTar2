import { Component } from "react";

export default class CCTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            wid:"100",
        }
    }
    changeWid = (e) => {
        this.setState({wid:"50"});
    };
    changeDBClick =(e) => {
        this.setState({wid:"100"});
    };
    render(){
        return(
            <>
            <div id="conatiner">
            <table onClick={this.changeWid} 
             onDoubleClick={this.changeDBClick}
             style={{width: this.state.wid+"%"}}>
                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            </div>
            </>
        );
    }
}