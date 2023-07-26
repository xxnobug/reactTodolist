import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import Todo from './page/todo/index'




export default  class  App extends Component {
  render(){
    return (
      <div className="App">
        <Todo></Todo>
      </div>
    );
  }
  
}
