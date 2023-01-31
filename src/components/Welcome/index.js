// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onBtn = () => {
    const {isSubscribed} = this.state

    this.setState({isSubscribed: !isSubscribed})
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p1 className="para"> Thank you! Happy Learning</p1>
        {isSubscribed ? (
          <button type="button" className="btn" onClick={this.onBtn}>
            Subscribed
          </button>
        ) : (
          <button type="button" className="btn" onClick={this.onBtn}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
