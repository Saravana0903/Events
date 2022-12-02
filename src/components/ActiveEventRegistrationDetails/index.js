// Write your code here

import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  initialMode = () => (
    <h1 className="head">Click on an event to view its registration details</h1>
  )

  inProgress = () => (
    <div className="in-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="icon-register"
      />
      <p className="para"> register here</p>
      <button className="register-btn">Register here</button>
    </div>
  )

  registered = () => (
    <div className="in-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="icon-register"
      />
      <p className="para">You are already registered for this event</p>
    </div>
  )

  closed = () => (
    <div className="in-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="icon-register"
      />
      <h1 className="head">Registrations are closed</h1>
      <p className="para">Hi</p>
    </div>
  )

  render() {
    const {status} = this.props
    console.log(status)
    switch (status) {
      case 'initial':
        return this.initialMode()
      case 'YET_TO_REGISTER':
        return this.inProgress()
      case 'REGISTERED':
        return this.registered()
      case 'REGISTRATIONS_CLOSED':
        return this.closed()
      default:
        return <p>Hi</p>
    }
  }
}

export default ActiveEventRegistrationDetails
