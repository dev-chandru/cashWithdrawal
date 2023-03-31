// Write your code here
import './index.css'

const DenominationItem = props => {
  const {domListItems, onSubOfAmount} = props
  const {value} = domListItems
  const onButtonClick = () => {
    onSubOfAmount(value)
  }
  return (
    <li>
      <button className="list-container" onClick={onButtonClick} type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
