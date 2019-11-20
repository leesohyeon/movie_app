import React from 'react';

class App extends React.Component{
  state={ //state 데이터는 변함
    count : 0
  };
  add=() =>{
    // this.setState({count: this.state.count+1}) 외부에 의존
    this.setState(current => ({count: current.count+1})); 
    //function을 씀으로써 의존X

  };
  minus=() =>{
    this.setState(current => ({count:current.count-1}));
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
