// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {count: '2000'}

  onSubOfAmount = value => {
    this.setState(prevState => ({count: parseInt(prevState.count) - value}))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-bg-container">
        <div className="main-card-container">
          <div className="name-card-container">
            <p className="name-letter">s</p>
            <h3 className="main-name">Sarah Williams</h3>
          </div>
          <div className="balance-status-container">
            <p className="balance">Your Balance</p>
            <div className="balance-card">
              <h1 className="calculated-amount">{count}</h1>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="paragraph">CHOOSE SUM (IN RUPEES)</p>
          <ul className="main-list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                domListItems={eachItem}
                key={eachItem.id}
                onSubOfAmount={this.onSubOfAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
