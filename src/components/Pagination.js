import React, { Component, Fragment } from 'react'

const styles = {
  Main: {
    position: 'absolute',
    right: '10vw',
  },
  Item: {
    display: 'inline-block',
    border: '1px solid black',
    margin: 5,
    cursor: 'pointer',
    width: 50,
    textAlign: 'center',
    userSelect: 'none',
  },
  Effect: {
    display: 'inline-block',
    border: '1px solid black',
    margin: 5,
    width: 50,
    textAlign: 'center',
    cursor: 'default',
    background: 'black',
    color: 'white',
    userSelect: 'none',
  },
}

export default class Pagination extends Component {
  renderListItem = ({ pageState, handleClick }) => {
    const { NowPage, TotalPage } = pageState
    const renderEffectItem = () => {
      return <li style={styles.Effect}>{NowPage}</li>
    }
    const renderItem = inputNumber => {
      return inputNumber <= TotalPage ? (
        <li style={styles.Item} onClick={() => handleClick(inputNumber)}>
          {inputNumber}
        </li>
      ) : null
    }
    switch (NowPage) {
      case 1:
        return (
          <Fragment>
            {renderEffectItem()}
            {renderItem(2)}
            {renderItem(3)}
            {renderItem(4)}
            {renderItem(5)}
          </Fragment>
        )
      case 2:
        return (
          <Fragment>
            {renderItem(1)}
            {renderEffectItem()}
            {renderItem(3)}
            {renderItem(4)}
            {renderItem(5)}
          </Fragment>
        )
      case TotalPage - 1:
        return (
          <Fragment>
            {renderItem(NowPage - 3)}
            {renderItem(NowPage - 2)}
            {renderItem(NowPage - 1)}
            {renderEffectItem()}
            {renderItem(NowPage + 1)}
          </Fragment>
        )

      case TotalPage:
        return (
          <Fragment>
            {renderItem(NowPage - 4)}
            {renderItem(NowPage - 3)}
            {renderItem(NowPage - 2)}
            {renderItem(NowPage - 1)}
            {renderEffectItem()}
          </Fragment>
        )

      default:
        return (
          <Fragment>
            {renderItem(NowPage - 2)}
            {renderItem(NowPage - 1)}
            {renderEffectItem()}
            {renderItem(NowPage + 1)}
            {renderItem(NowPage + 2)}
          </Fragment>
        )
    }
  }
  render() {
    const {
      pageState: { NowPage, TotalPage },
      handleClick,
    } = this.props
    if (TotalPage === 0) return null
    return (
      <ul style={styles.Main}>
        <li
          style={styles.Item}
          onClick={() => NowPage !== 1 && handleClick(NowPage - 1)}
        >
          PREV
        </li>
        {this.renderListItem(this.props)}
        <li
          style={styles.Item}
          onClick={() => NowPage < TotalPage && handleClick(NowPage + 1)}
        >
          NEXT
        </li>
      </ul>
    )
  }
}
