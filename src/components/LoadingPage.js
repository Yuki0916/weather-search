import React, { Component } from 'react'

const styles = {
  LoadingPage: {
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

export default class LoadingPage extends Component {
  render() {
    return (
      <div style={styles.LoadingPage}>
        <div>Loading</div>
      </div>
    )
  }
}
