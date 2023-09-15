// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  ShowFirstName = () => {
    this.setState(prevState => {
      if (prevState.firstName === false) {
        return {
          firstName: true,
        }
      }
      return {
        firstName: false,
      }
    })
  }

  ShowLastName = () => {
    this.setState(prevState => {
      if (prevState.lastName === false) {
        return {
          lastName: true,
        }
      }

      return {lastName: false}
    })
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg">
        <h1 className="heading">Show/Hide</h1>
        <div className="cards">
          <div>
            <div className="btns">
              <button
                type="button"
                className="butn-style"
                onClick={this.ShowFirstName}
              >
                {' '}
                Show/Hide Firstname{' '}
              </button>
            </div>

            {firstName === true ? (
              <div className="card">
                <p>Joe</p>
              </div>
            ) : (
              <div className="card1">
                <p>{null}</p>
              </div>
            )}
          </div>
          <div>
            <div className="btns">
              <button
                type="button"
                className="butn-style"
                onClick={this.ShowLastName}
              >
                {' '}
                Show/Hide LastName{' '}
              </button>
            </div>

            {lastName === true ? (
              <div className="card">
                <p>Jonas</p>
              </div>
            ) : (
              <div className="card1">
                <p>{null}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
