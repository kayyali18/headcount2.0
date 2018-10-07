import React, { Component } from 'react'
import PropTypes from 'prop-types' 

import FilterResults from './FilterResults'
import FilteredResults from './FilteredResults'

class SearchArea extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: []
    }
  }

  handleSelected = (selection, boolean) => {
    if (boolean) {
      this.setState({
        selected: [...this.state.selected, selection]
      })
    } else {
      //make new array with everything but the unselected option
      const cleanedArray = this.state.selected.filter(entry => {
        if (!entry.includes(selection)) return entry
        return
      })
      this.setState({
        selected: cleanedArray
      })
    }
  }
  
  render() { 
    return ( 
      <section className="l-search search-area">
        <button id="search-area-btn" type='submit' onClick={this.handleSubmit}>GO!</button>
        <FilterResults alphabetQuery={this.props.alphabetQuery} />
        <FilteredResults results={this.props.results} handleSelected={this.handleSelected}/>
      </section>
    )
  }
}
 
export default SearchArea


SearchArea.propTypes = {
  results: PropTypes.array,
  alphabetQuery: PropTypes.func,
  multipleMatches: PropTypes.func
}