import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    console.log("hello");
  }
  state={
    cnt:0
  };
  plus= () =>{
    this.setState(current=>({cnt:current.cnt+1}));
  };
  minus= () =>{
    this.setState(current=>({cnt:current.cnt-1}));
  };
  componentDidMount(){
    console.log("hello@-@");
  };
  componentDidUpdate(){
    console.log("I just Updated!!");
  }
  componentWillUnmount(){
    console.log("I just amounted");
  }
  render(){
    return (
      <>
        <h1>This number is: {this.state.cnt}</h1>
        <button onClick={this.plus}>plus</button>
        <button onClick={this.minus}>minus</button>
      </>
      )
  };
}

export default App;