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
  },
  tableHead: {
    border: '1px solid black',
    padding: 5,
    textAlign: 'center',
    cursor: 'pointer',
  },
  tableCell: {
    border: '1px solid black',
    padding: 5,
    textAlign: 'center',
  },
}

class ResultTable extends Component {
  resultHead = () => {
    return (
      <thead>
        <tr>
          <th key={'table-head-1'} style={styles.tableHead}>
            No
          </th>
          <th key={'table-head-2'} style={styles.tableHead}>
            Name
          </th>
          <th key={'table-head-3'} style={styles.tableHead}>
            Temperature (Celsius)
          </th>
          <th key={'table-head-4'} style={styles.tableHead}>
            Weather
          </th>
        </tr>
      </thead>
    )
  }
  resultItem = (item, keyNumber) => {
    return (
      <tr style={styles.tableRow} key={keyNumber}>
        <td style={styles.tableCell}>{keyNumber + 1}</td>
        <td style={styles.tableCell}>{item.Name}</td>
        <td style={styles.tableCell}>{`${item.Temp}°C`}</td>
        <td style={styles.tableCell}>
          <img src={item.WeatherPicture} alt="" />
        </td>
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
