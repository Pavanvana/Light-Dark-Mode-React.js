// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    const backGroundColor = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`card ${backGroundColor}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button onClick={this.onClickButton} className="button" type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
