import './index.css'

const DenominationItem = props => {
  const {value, stateChange} = props
  const onChangeState = () => {
    stateChange(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onChangeState}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
