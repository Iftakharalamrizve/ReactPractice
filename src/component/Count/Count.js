import React, { Component } from 'react';

class Count extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:10,
      color : "black"
    }
  }
  incress=()=>{
    this.setState({
      counter:this.state.counter+1
    })
    if(this.state.counter<=5){
      this.setState({
        color:"Red"
      })
    }else if(this.state.counter>=15){
      this.setState({
        color:"Green"
      })
    }else{
      this.setState({
        color:"black"
      })
    }
  }

  decress=()=>{
    this.setState({
      counter:this.state.counter-1
    })
    if(this.state.counter<=5){
      this.setState({
        color:"Red"
      })
    }else if(this.state.counter>=15){
      this.setState({
        color:"Green"
      })
    }else{
      this.setState({
        color:"black"
      })
    }
  }

  render() {
    return (
      <div>
         <h2 style={{color:this.state.color}}><span onClick={this.incress}>+</span>&nbsp;{this.state.counter}<span onClick={this.decress}>&nbsp;-</span></h2>
      </div>
    );
  }
}

export default Count;
