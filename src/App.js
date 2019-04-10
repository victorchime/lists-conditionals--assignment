import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharComponent from './Common/Char';
import Validator from './Validation/Validator'

class App extends Component {

  state = {
    inputTextValue: "Start Typing"
  }

  inputChangeHandler = (event) => {
    this.setState({
      inputTextValue: event.target.value
    })
  }

  removeCharacter = (charIndex) => {
    let inputTextCopyArray = this.state.inputTextValue.split("");
    inputTextCopyArray = inputTextCopyArray.splice(charIndex, 1)
    console.log = inputTextCopyArray
    let finalText = inputTextCopyArray.join('');

    this.setState({
      inputTextValue: finalText
    })
  }

  renderCharComponents = () =>{
    const inputValue = this.state.inputTextValue.split('');

    return inputValue.map((charElement, charIndex) => {
      return  <CharComponent initialInputFieldChar={charElement} onClick={charIndex => this.removeCharacter(charIndex)} />
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.inputChangeHandler} value={this.state.inputTextValue} />
        <p>{this.state.inputTextValue.length}</p>
        <Validator inputTextValue={this.state.inputTextValue} />
        {this.renderCharComponents()}
      </div>
    );
  }
}

export default App;
