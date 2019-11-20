import React from 'react';

class App extends React.Component{
  state={ //state 데이터는 변함
    count : 0
  };
  add=() =>{
    console.log("add");
  };
  minus=() =>{
    console.log("minus");
  };
  render(){
    return (
    <div>
    <h1> The number is {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}


export default App;
