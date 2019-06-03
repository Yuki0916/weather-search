import React, { Component } from 'react'

const styles = {
  Main: {
    width: 700,
    height: 400,
    background: 'white',
    position: 'relative',
  },
  Tital: {
    width: 'auto',
    margin: 10,
  },
  List: {
    height: 150,
    width: 'auto',
    overflow: 'auto',
    border: '1px solid red',
  },
  Item: {
    padding: 10,
  },
  Button: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'deepskyblue',
    lineHeight: 1.5,
  },
}

export default class Dialog extends Component {
  renderListItem = (item, key) => (
    <li style={styles.Item} key={key}>{`${key + 1}: ${item}`}</li>
  )
  render() {
    const { RepositoryName, BranchList, CommitList } = this.props.data
    const { handleClose } = this.props
    return (
      <div style={styles.Main}>
        <div style={styles.Tital}>{`${RepositoryName} 前十筆 Branch Name`}</div>
        <ol style={styles.List}>
          {BranchList.map((item, key) => this.renderListItem(item, key))}
        </ol>
        <div
          style={styles.Tital}
        >{`${RepositoryName} 前十筆 Commit Message`}</div>
        <ol style={styles.List}>
          {CommitList.map((item, key) => this.renderListItem(item, key))}
        </ol>
        <button style={styles.Button} onClick={handleClose}>
          close
        </button>
      </div>
    )
  }
}
