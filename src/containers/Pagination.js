import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCenter from '../actions'
import PaginationItem from '../components/Pagination'

class Pagination extends Component {
  state = {
    NowPage: 1,
    TotalPage: 0,
  }

  handleChangePage = numberPage => {
    const { fetchOtherPageRepository, queryString } = this.props
    this.setState({ NowPage: numberPage })
    fetchOtherPageRepository(numberPage, queryString)
  }

  shouldComponentUpdate(nextProps, nextState) {
    const nowTotalPage = this.props.paginationCount
    const nextTotalPage = nextProps.paginationCount
    const nowQueryString = this.props.queryString
    const nextQueryString = nextProps.queryString
    let isChange = false
    if (nowQueryString !== nextQueryString && nowQueryString !== '') {
      this.setState({ NowPage: 1 })
      isChange = true
    }
    if (nowTotalPage !== nextTotalPage) {
      this.setState({ TotalPage: nextTotalPage })
      isChange = true
    }
    return !isChange
  }

  render() {
    return (
      <Fragment>
        <PaginationItem
          pageState={this.state}
          handleClick={this.handleChangePage}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  paginationCount: state.dataStore.PaginationCount,
  queryString: state.dataStore.QueryString,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCenter, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)
