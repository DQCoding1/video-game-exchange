import React from 'react'
import './Loading.scss'

const Loading = () => {
  return (
    <div className="loading">
      <div className="lading__container">
        <div className="loading__circle"></div>
        <p className="loading__text">LOADING ...</p>
      </div>
    </div>
  )
}

export default Loading