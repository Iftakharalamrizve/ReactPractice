import React, { Component } from 'react';
import './App.css';
import First from './First/First';
import Count from './Count/Count';
import EventHandle from './Eventhandle/EventHandle';


class App extends Component {
  state={
    person:[
      {name:"Iftakhar alam Rizvr",email:"iftakharalam32@gmail.com",phone:"934789324"},
      {name:"Iftakhar alam ",email:"iftakharalam32@",phone:"0324343"},
      {name:"Iftakhar  ",email:"iftakharalam32@gmail",phone:"0324323"}
    ]
  }
  render() {
    return (
      <div className="App">
        {/* <First name={this.state.person[0].name}  email={this.state.person[0].email} phone={this.state.person[0].phone}/>
        <First name={this.state.person[1].name} email={this.state.person[1].email} phone={this.state.person[1].phone}/>
        <First name={this.state.person[2].name} email={this.state.person[2].email} phone={this.state.person[2].phone}/>
        <Count/> */}

        {/* {this.state.person.map((pepole,index)=>{
          return <First
                  key={index}
                  name={pepole.name}
                  email={pepole.email}
                  phone={pepole.phone}
                />
        })} */}
        <EventHandle />
      </div>
    );
  }
}

export default App;
