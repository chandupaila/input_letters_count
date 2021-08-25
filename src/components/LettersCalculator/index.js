import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {length: 0}

  inputEnter = event => {
    const text = event.target.value
    this.setState({length: text.length})
  }

  render() {
    const {length} = this.state
    console.log(length)
    return (
      <div className="bg-container">
        <div className="left">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="inputtext" className="para">
            Enter the phrase
          </label>
          <br />
          <input
            id="inputtext"
            className="input"
            type="text"
            onChange={this.inputEnter}
            placeholder="Enter the phrase"
          />
          <h1 className="count">No.of letters: {length}</h1>
        </div>
        <div className="right">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="count"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
