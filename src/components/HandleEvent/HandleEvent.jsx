import React, { Component } from 'react'

export default class HandleEvent extends Component {
  handleClick = () =>{
    alert('hello React')
  }
    render() {
    return (
      <div className='container'>
        <button className='btn btn-success' onClick={this.handleClick}>Button</button>
        <input type="text" className='w-25 form-control' onKeyUp={(e)=>{
            let tagInput = e.target
            console.log(tagInput.value);
        }} />
      </div>
    )
  }
}
