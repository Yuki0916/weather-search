import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCenter from '../actions'
import ResultTableItem from '../components/ResultTable'

const styles = {
  ResultTableMain: {
    height: '70vh',
    overflow: 'auto',
    background: 'lightblue',
  },
  ResultTableTitle: {
    padding: 5,
    textAlign: 'center',
  },
}

class ResultTable extends Component {
  state = {
    stateResultList: [],
    name: '',
    reverse: false,
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
      <div style={styles.ResultTableMain}>
        <div style={styles.ResultTableTitle}>Search Result</div>
        <ResultTableItem searchResultList={stateResultList} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchResultList: state.dataStore.WeatherResultList,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCenter, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultTable)
