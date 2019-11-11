import React, {Component} from 'react';
import axios from 'axios';
class ProductDetail extends Component {
	constructor(props){
        super(props)
        this.state = {
           products : []
        }
    }    
    componentDidMount(){
      var {match} = this.props;
      if (match) {
      	var id = match.params.id;
      	axios({
        method: 'GET',
        url :`http://localhost:3000/products/${id}`,
        data : null
     	 }).then(res =>{
     	 	var data =res.data;
        	this.setState({
         	 products :data
        	});
      		}).catch( err =>{
        	console.log(err);
      		});
    	}
      }
 render() {

 	// var {products} = this.state;
  	return (

  		<div className="card mb-3" style={{maxWidth: 'auto'}}>
    	<div className="row">
      	<div className="col-md-4">
         <img src={this.state.products.image} className="card-img" />
      	</div>
      	<div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{this.state.products.name}</h5>
          <div className="col-md-12" >
            <div className="row">
              <p className="col-md-6 loaimay" style={{float:'left'}}>Loại sản phẩm : {this.state.products.type}</p>
              <p  className="col-md-6" style={{float:'right'}}>Tình trạng: {this.state.products.status === true ? 'Còn hàng' : 'Hết hàng'}</p>
            </div>
          </div>
          <p className="card-text price">Giá : {this.state.products.salePrice}đ</p>
          <ul className="ul">
            <li>Loại Máy: {this.state.products.categoryName}</li>
            <li>Cảm biến hình ảnh : {this.state.products.sensor}</li>
            <li>Khổ giấy: {this.state.products.size} </li>
            <li>Tốc độ: {this.state.products.speed} </li>
          </ul>
        </div>
      	</div>
   		 </div>
  		</div>
   		);
	}
}

export default ProductDetail;