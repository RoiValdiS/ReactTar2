import { Component } from "react";

export default class CCColors extends Component{
    constructor(props){
        super(props);
        this.state={
            col:"white",
        }
    }
    changeColor= (e)=>{
        this.setState({col:e.target.innerHTML});
        
    };

    render(){
        return(
            <div style={{backgroundColor:this.state.col}}>
                <button onClick={this.changeColor}>Blue</button>
                <button onClick={this.changeColor}>Pink</button>
                <button onClick={this.changeColor}>Red</button>
                <button onClick={this.changeColor}>Green</button><br />
                <button onClick={this.changeColor}>Orange</button>
                <button onClick={this.changeColor}>Brown</button>
                <button onClick={this.changeColor}>Gray</button>
                <button onClick={this.changeColor}>Yellow</button>
            </div>
        );
    }
}