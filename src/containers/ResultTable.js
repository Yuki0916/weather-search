import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sortBy } from 'lodash'
import * as ActionCenter from '../actions'
import ResultTableItem from '../components/ResultTable'

class ResultTable extends Component {
  state = {
    stateResultList: [],
    name: '',
    reverse: false,
  }

  sortTable = inputName => {
    const { stateResultList, name, reverse } = this.state
    if (inputName === name)
      return this.setState({
        stateResultList: stateResultList.reverse(),
        name: inputName,
        reverse: !reverse,
      })
    return this.setState({
      stateResultList: sortBy(stateResultList, inputName),
      name: inputName,
      reverse: false,
    })
  }

  getRepositoryInfo = (repositoryName, ownerName) => {
    const { fetchRepositoryInformation } = this.props
    fetchRepositoryInformation(repositoryName, ownerName)
  }

  shouldComponentUpdate(nextProps, nextState) {
    const nowResultList = this.props.searchResultList
    const nextResultList = nextProps.searchResultList
    if (nowResultList !== nextResultList) {
      this.setState({ stateResultList: nextResultList })
      return false
    }
    return true
  }
  render() {
    const { stateResultList } = this.state
    return (
      <div>
        <ResultTableItem
          searchResultList={stateResultList}
          sortTable={this.sortTable}
          getRepositoryInfo={this.getRepositoryInfo}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchResultList: state.dataStore.SearchResultList,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCenter, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultTable)
