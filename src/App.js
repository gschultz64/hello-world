import React, {Component} from 'react';

class Hello extends Component {
  constructor(props) {
    super(props)
    // This is where we define initial state
    this.state = {
      moodPoints: 1
    }
  }

  increaseMood(e) {
    this.setState({
      moodPoints: this.state.moodPoints + 1
    })
  }
  
  render() {
    let name = this.props.person.personName;
    let age = this.props.person.personAge;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>You are this many: {age}</p>
        <p>On a scale of 1 to 10</p>
        <p>You are this happy: {this.state.moodPoints} </p>
        <button onClick={(e) => this.increaseMood(e)} >Cheer Up!</button>
      </div>
    )
  }
}

export default Hello
