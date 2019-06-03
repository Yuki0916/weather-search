import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCenter from '../actions'
import SearchBarItem from '../components/SearchBar'

const styles = {
  Header: {
    paddingTop: '10%',
  },
}

class SearchBar extends Component {
  initialState = {
    searchText: '',
  }
  state = this.initialState

  changeContent = e => this.setState({ searchText: e.target.value })
  handleEnter = e => {
    if (e.keyCode === 13) this.handleSearch()
  }
  handleSearch = () => {
    const { searchText } = this.state
    !!searchText && this.props.fetchSearchRepository(searchText)
  }

  render() {
    return (
      <header style={styles.Header}>
        <SearchBarItem
          handleEnter={this.handleEnter}
          handleSearch={this.handleSearch}
          onChange={this.changeContent}
        />
      </header>
    )
  }
}

const mapStateToProps = state => ({
  searchResult: state.dataStore.SearchResult,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCenter, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
