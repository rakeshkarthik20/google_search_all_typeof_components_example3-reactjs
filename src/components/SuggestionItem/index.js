// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion, displayItem, id} = props

  const displayItem1 = () => {
    displayItem({suggestion, id})
  }
  return (
    <li className="suggestionItemContainer">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrowImage"
        onClick={displayItem1}
      />
    </li>
  )
}

export default SuggestionItem
