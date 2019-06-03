import React, { Component } from 'react'

const styles = {
  Main: {
    width: 200,
    height: 100,
    background: 'white',
    position: 'relative',
  },
  Tital: {
    width: 'auto',
    margin: 10,
  },
  Button: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'deepskyblue',
    lineHeight: 1.5,
  },
}

export default class Dialog extends Component {
  render() {
    const { Message } = this.props.data
    const { handleClose } = this.props
    return (
      <div style={styles.Main}>
        <div style={styles.Tital}>{`${Message}`}</div>
        <button style={styles.Button} onClick={handleClose}>
          close
        </button>
      </div>
    )
  }
}
