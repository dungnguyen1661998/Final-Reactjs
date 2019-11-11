import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
const uuidv4 = require('uuid/v4');

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      salePrice: "",
      image: "",
      categoryName: "",
      type: "",
      sensor: "",
      size: "",
      speed: "",
      status: true,
      promotion: ""
    };
  }
  
  onChange = event => {
    var target = event.target;
    var name = target.name;
    var type = target.type;
    var value = target.value;
    if (name === "tinhtranghang") {
      value = target.value === "true" ? true : false;
    }
    if (type === "file") {
      value = this.image.value.replace(/C:\\fakepath\\/i, "/assets/img/");
    }

    this.setState({
      [name]: value
    });
  };

  onSave = e => {
    var {
      name,
      price,
      salePrice,
      image,
      categoryName,
      type,
      sensor,
      size,
      speed,
      status,
      promotion
    } = this.state;
    var { history } = this.props;
    axios({
      method: "POST",
      url: "http://localhost:3000/products",
      data: {
        id: require('uuid/v4'),
        name: name,
        price: price,
        salePrice: salePrice,
        image: image,
        categoryName: categoryName,
        type: type,
        sensor: sensor,
        khogiayscan: size,
        speed: speed,
        status: status,
        promotion: promotion
      }
    });
  };

  onClear = () => {
    this.setState({
      name: "",
      price: "",
      salePrice: "",
      image: "",
      categoryName: "",
      type: "",
      sensor: "",
      size: "",
      speed: "",
      status: true,
      promotion: ""
    });
  };
  render() {
    return (
      
      <div className="panel panel-warning col-md-8">
        
        <div className="panel-heading">
          <h3 className="panel-title mt-3">Hãy nhập thông tin sản phẩm</h3>
        </div>
        <div className="col-md-6 sty">
              
        
                  <label>Chọn Ảnh :</label>
                  <input style={{width:'300px'}}
                    type="file"
                    name="image"
                    ref={input => {
                      this.image = input;
                    }}
                    onChange={this.onChange}
                    
                  />
        
                <img style={{width:"200px"}} src={this.state.image}/>
              </div>
        <div className="panel-body">
          <form onSubmit={this.onSave}>
            <div className="form-inline">
              <div className="col-md-6 sty">
                <div className="form-group">
                  <label>Tên Sản phẩm :</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 sty">
                <div className="form-group">
                  <label>Giá Sản phẩm :</label>
                  
                  <input
                    type="number"
                    name="price"
                    value={this.state.price}
                    onChange={this.onChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 sty">
                <div className="form-group">
                  <label>Giá Khuyến Mãi :</label>
                  <input
                    type="number"
                    name="salePrice"
                    value={this.state.salePrice}
                    onChange={this.onChange}
                    className="form-control"
                  />
                </div>
              </div>
              
              

              <div className="col-md-6 sty">
                <div className="form-group">
                  <label>Tên loại sản phẩm ( Máy In/ )</label>
                  <select
                    className="form-control"
                    name="categoryName"
                    value={this.state.categoryName}
                    onChange={this.onChange}
                    required="required"
                  >
                    <option value="Máy In">Máy In</option>
                    <option value="Máy Quét">Máy Quét</option>
                    <option value="Máy Scan">Máy Scan</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 sty">
                <div className="form-group">
                  <label>Loại Máy :</label>
                  <input
                    type="text"
                    name="type"
                    value={this.state.type}
                    onChange={this.onChange}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-6 sty">
                <div className="form-group">
                  <label>Cảm biến hình ảnh :</label>
                  <input
                    type="text"
                    name="sensor"
                    value={this.state.sensor}
                    onChange={this.onChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 sty">
                <div className="form-group">
                  <label>Khổ giấy Scan :</label>
                  <input
                    type="text"
                    name="size"
                    value={this.state.size}
                    onChange={this.onChange}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-6 sty">
                <div className="form-group">
                  <label>Tốc độ Scan :</label>
                  <input
                    type="text"
                    name="speed"
                    value={this.state.speed}
                    onChange={this.onChange}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-6 sty">
                <label>Tình trạng hàng :</label>
                <select
                  className="form-control"
                  name="status"
                  value={this.state.status}
                  onChange={this.onChange}
                  required="required"
                >
                  <option  value={true}>Còn hàng</option>
                  <option value={false}>Hết hàng</option>
                </select>
              </div>
              <div className="col-md-6 sty">
                <div className="form-group">
                  <label>Trạng thái:</label>
                  <select
                    className="form-control"
                    name="promotion"
                    value={this.state.promotion}
                    onChange={this.onChange}
                    required="required"
                  >
                    <option  value="New">New</option>
                    <option value="Hot">Hot</option>
                    <option value="Sale Off">Sale Off</option>
                  </select>{" "}
                </div>
              </div>

              <br />
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Lưu
                </button>
                &nbsp;
                <button
                  type="button"
                  onClick={this.onClear}
                  className="btn btn-primary"
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Add;
