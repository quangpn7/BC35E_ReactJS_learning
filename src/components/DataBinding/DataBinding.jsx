import React, { Component } from 'react'

export default class DataBinding extends Component {
    //obj
    product = {
        id: 1,
        name: 'product1',
        price: 2000,
        img: "https://i.pravatar.cc"
    };
    
    
    tong2So = (a,b) => {
        return a+b
    }

    renderProduct = () => {
        return <div className='card'>
            <img src={this.product.img} />
            <div className='card-body'>
                <h3>{this.product.name}</h3>
                <p>{this.product.price}</p>
                <button className='btn btn-success'>Add to cart</button>
            </div>
        </div>
    }
    
    render() {
    let title = "CyberSoft";
    
    return (
      <div className='container'>
        <h3>Tittle: {title}</h3>
        <h3>tong2So: {this.tong2So(1,2)}</h3>
      <div className='w-25'>
        {this.renderProduct()}
      </div>
      </div>
    )
  }
}
