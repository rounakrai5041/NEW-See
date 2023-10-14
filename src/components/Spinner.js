import React, { Component } from 'react'
import loading from "../99.gif"

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt='Lo'/>
      </div>
    )
  }
}

export default Spinner