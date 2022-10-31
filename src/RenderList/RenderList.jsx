import React, { Component } from "react";

const arrProduct = [
  { id: 1, name: "red car", img: "./img/red-car.jpg", price: 1000 },
  { id: 2, name: "black car", img: "./img/black-car.jpg", price: 2000 },
  { id: 3, name: "silver car", img: "./img/silver-car.jpg", price: 3000 },
  { id: 4, name: "steel car", img: "./img/steel-car.jpg", price: 4000 },
];
// CÁCH 1: SỬ DỤNG FOR
export default class RenderList extends Component {
  renderProduct = () => {
    let output = [];
    for (let prod of arrProduct) {
      let tr = (
        <tr>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>
            <img src={prod.img} alt="" width={50} height={50} />
          </td>
          <td>{prod.price}</td>
          <td></td>
        </tr>
      );
      output.push(tr);
    }

    return output;
  };
  //Cách 2: sử dụng map
  renderProd = () => {
    let arrTr = arrProduct.map((prod, index) => {
      return (
        <tr key={index}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>
            <img src={prod.img} alt="" width={50} height={50} />
          </td>
          <td>{prod.price}</td>
          <td></td>
        </tr>
      );
    });
    return arrTr;
  };
  //RENDER CARD
  renderCard = () => {
    let output = [];
    for (let item of arrProduct) {
      let divCol = (
        <div className="col-3" key={item.id}>
          <div className="card">
            <img src={item.img} alt="" />
            <div className="card-body">
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button className="btn btn-success">Add to cart</button>
            </div>
          </div>
        </div>
      );
      output.push(divCol);
    }
    return output;
  };

  //CÁCH MAP:
  renderCardAlt = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <div className="card">
            <img src={item.img} alt="" />
            <div className="card-body">
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button className="btn btn-success">Add to cart</button>
            </div>
          </div>
        </div>
      );
    });
  };

  //MAIN RENDER
  render() {
    return (
      <div className="container">
        <h3>Car list</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>img</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderProd()}</tbody>
        </table>
        <h3 className="mt-2">
          <div className="row mt-2">
            <div className="row">
              {/* <div className="col-4">
                <div className="card">
                  <img src="./img/red-car.jpg" alt="" />
                  <div className="card-body">
                    <p>Prodcut name</p>
                    <p>Product Price</p>
                    <button className="btn btn-success">Add to cart</button>
                  </div>
                </div>
              </div> */}
              {this.renderCardAlt()}
            </div>
          </div>
        </h3>
      </div>
    );
  }
}
