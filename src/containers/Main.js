import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import Pagination from './Pagination'
import ResultTable from './ResultTable'
import LoadingPage from '../components/LoadingPage'
import Dialog from './Dialog'

const styles = {
  Main: {
    boxSizing: 'border-box',
    width: '100vw',
    height: '100vh',
  },
}

export class Main extends Component {
  render() {
    const { loadingStatus, dialogStatus } = this.props
    return (
      <div style={styles.Main}>
        <SearchBar />
        <ResultTable />
        <Pagination />
        {loadingStatus && <LoadingPage />}
        {dialogStatus && <Dialog />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loadingStatus: state.pageControl.Loading,
  dialogStatus: state.pageControl.Dialog,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
