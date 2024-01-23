import { Component } from "react";

export default class CCPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstN : "",
        lastN:"",
        grade:"",
        gradeSen:"",
    }
  }
  focusRec = (e) => {
    let tmp = e.target.previousElementSibling.innerHTML;
    if (tmp == "First Name " &&  e.target.value=="") {
        
        this.setState({firstN:"Please Insert "+tmp});
    }
    if (tmp == "Last Name " &&  e.target.value=="") {
        this.setState({lastN:"Please Insert "+tmp});
    }
    if ((tmp == "Grade " &&  e.target.value=="")) {
        this.setState({grade:"Please Insert "+tmp});
    }
    
  };
  focusRecOut = (e) => {
    this.setState({firstN:"",lastN:"",grade:""});
    let tmp = e.target.previousElementSibling.innerHTML;
    if ((tmp == "Grade ")) {
        if (e.target.value=="") {
            this.setState({gradeSen:""});
            return;
        }
        if (e.target.value > 555) {
            this.setState({gradeSen:"You Can Start To Study!!!"})
           
        }
        else{
            this.setState({gradeSen:"You CANNOT Start To Study!!!"})
        }
    }
  };
  render() {
    return (
      <>
        <div>
          <h1>Student Details</h1>
          <form>
            <h3 style={{color:"red"}}>{this.state.firstN}</h3>
            <label>First Name </label>
            <input onBlur={this.focusRecOut}
              onFocus={this.focusRec} type="text" id="firstName" name="firstName" required
            ></input>
            <br />
            <h3 style={{color:"red"}}>{this.state.lastN}</h3>
            <label>Last Name </label>
            <input onBlur={this.focusRecOut} onFocus={this.focusRec} type="text" id="lastName" name="lastName" required></input>
            <br />
            <h3 style={{color:"red"}}>{this.state.grade}</h3>
            <label>Grade </label>
            
            <input onBlur={this.focusRecOut} onFocus={this.focusRec} type="number" id="grade" name="grade" required></input>
            <h3 style={{color:"blue"}}>{this.state.gradeSen}</h3>
          </form>
        </div>
      </>
    );
  }
}
