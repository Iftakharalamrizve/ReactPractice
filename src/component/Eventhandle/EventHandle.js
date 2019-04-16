import React, { Component } from 'react';

class EventHandle extends Component {
 state={
   name:""
 }
 inputFormat=(event)=>{
   this.setState({
     name:event.target.value
   })
 }
  render() {
    return (
      <div>
         <input onChange={this.inputFormat} type="text" value={this.state.name} />
         <button onClick={(event)=>{console.log(event.target)}}>Click me</button>
         {this.state.name?<p>Hi i am {this.state.name}</p>:''}
      </div>
    );
  }
}

export default EventHandle;
