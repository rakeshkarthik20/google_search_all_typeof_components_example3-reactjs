// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {value: ''}

  displayItem = props => {
    const {suggestion} = props
    this.setState({value: suggestion})
  }

  searchItem = event => {
    this.setState({value: event.target.value})
  }

  render() {
    const {value} = this.state
    console.log(value)
    const {suggestionsList} = this.props

    const updateSuggestionList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(value.toLowerCase()),
    )
    console.log(updateSuggestionList)
    return (
      <div className="mainContainer">
        <div className="subContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="googleImage"
          />
          <div className="searchMainContainer">
            <div className="searchContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="searchLogo"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="searchBox"
                onChange={this.searchItem}
                value={value}
              />
            </div>
            <ul className="searchItems">
              {updateSuggestionList.map(each => (
                <SuggestionItem
                  suggestion={each.suggestion}
                  key={each.id}
                  displayItem={this.displayItem}
                  id={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
