import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCenter from '../actions'
import DialogItem from '../components/Dialog'
const styles = {
  BackgroundPage: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(50, 115, 220, 0.3)',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
export class Dialog extends Component {
  render() {
    const { dialogInformation, cleanSearchRepository } = this.props
    return (
      <div style={styles.BackgroundPage}>
        <DialogItem
          data={dialogInformation}
          handleClose={cleanSearchRepository}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  dialogInformation: state.dataStore.Dialog,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCenter, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog)
