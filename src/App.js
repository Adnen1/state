
import React, { Component } from "react";

import './App.css';


class App extends Component {
 state={fullName:"jalel", bio:"im lazy", imgSrc: "./ProfilePhoto.jpg", profession:"Batal", show:false, time :0} 
  HundleClick=() => {this.setState({ show: !this.state.show })}
  handletime=()=>{
    this.setState({time : this.state.time +1 })
    return this.state.time
  }

  componentDidMount(){
    var timer = setInterval(this.handletime , 10)
    return this.setState({time : timer})
  }

  
 
  render() {
  console.log(this.state.show)
  
    
    return (
      
      <div className='App'>
       
       
       <button onClick={this.HundleClick}>Show</button>
       {(this.state.show) ? <div className="img"> <img src={this.state.imgSrc}></img></div> : <div></div>}
       {(this.state.show) ? <div className="name">My name is {this.state.fullName}</div> : <div></div>}
       {(this.state.show) ? <div className="bio"> {this.state.bio}</div> : <div></div>}
      
       {(this.state.show) ? <div className="profession"> {this.state.profession}</div> : <div></div>}
       {(this.state.show) ? <div className="time"> {this.state.time}</div> : <div></div>}

      </div>
    );
  }
}

export default App;


