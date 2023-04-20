import './index.css'

import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {money: 2000}

  stateChange = value => {
    this.setState(prevState => ({
      money: prevState.money - value,
    }))
  }

  render() {
    const {money} = this.state
    const {denominationsList} = this.props

    return (
      <div className="app-container">
        <div className="cashWidhdrawal-container">
          <div className="heading-container">
            <div className="para-div">
              <p className="s">S</p>
            </div>
            <p className="name-para">Sarah Williams</p>
          </div>
          <div className="money-container">
            <p className="paragraph">Your Balance</p>
            <p className="money">{money}</p>
          </div>
          <p className="rupee">In Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="items-holder">
            {denominationsList.map(eachObject => (
              <DenominationItem
                key={eachObject.id}
                value={eachObject.value}
                stateChange={this.stateChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
