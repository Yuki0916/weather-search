import React, { Component } from 'react'
import Radium from 'radium'

const styles = {
  table: {
    margin: '20px auto',
    userSelect: 'none',
  },
  tableRow: {
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'gray',
    },
    ':active': {
      backgroundColor: 'black',
      color: 'white',
    },
  },
  tableHead: {
    border: '1px solid black',
    padding: 5,
    textAlign: 'center',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'gray',
    },
    ':active': {
      backgroundColor: 'black',
      color: 'white',
    },
  },
  tableCell: {
    border: '1px solid black',
    padding: 5,
    textAlign: 'center',
  },
}

class ResultTable extends Component {
  resultHead = () => {
    const { sortTable } = this.props
    return (
      <thead>
        <tr>
          <th key={'table-head-1'} style={styles.tableHead}>
            No
          </th>
          <th
            key={'table-head-2'}
            style={styles.tableHead}
            onClick={() => sortTable('RepositoryName')}
          >
            Repository Name
          </th>
          <th
            key={'table-head-3'}
            style={styles.tableHead}
            onClick={() => sortTable('OwnerName')}
          >
            Owner Name
          </th>
          <th
            key={'table-head-4'}
            style={styles.tableHead}
            onClick={() => sortTable('CreatedDate')}
          >
            Created Date
          </th>
          <th
            key={'table-head-5'}
            style={styles.tableHead}
            onClick={() => sortTable('UpdatedDate')}
          >
            Updated Date
          </th>
          <th
            key={'table-head-6'}
            style={styles.tableHead}
            onClick={() => sortTable('StarCount')}
          >
            Star Count
          </th>
          <th
            key={'table-head-7'}
            style={styles.tableHead}
            onClick={() => sortTable('Watchers')}
          >
            Watchers
          </th>
        </tr>
      </thead>
    )
  }
  resultItem = (item, keyNumber) => {
    const { getRepositoryInfo } = this.props
    return (
      <tr
        style={styles.tableRow}
        key={keyNumber}
        onClick={() => getRepositoryInfo(item.RepositoryName, item.OwnerName)}
      >
        <td style={styles.tableCell}>{keyNumber + 1}</td>
        <td style={styles.tableCell}>{item.RepositoryName}</td>
        <td style={styles.tableCell}>{item.OwnerName}</td>
        <td style={styles.tableCell}>{item.CreatedDate}</td>
        <td style={styles.tableCell}>{item.UpdatedDate}</td>
        <td style={styles.tableCell}>{item.StarCount}</td>
        <td style={styles.tableCell}>{item.Watchers}</td>
      </tr>
    )
  }
  render() {
    const { searchResultList } = this.props
    if (searchResultList.length === 0) return null
    return (
      <table style={styles.table}>
        {this.resultHead()}
        <tbody>
          {searchResultList.map((item, key) => {
            return this.resultItem(item, key)
          })}
        </tbody>
      </table>
    )
  }
}

export default Radium(ResultTable)
