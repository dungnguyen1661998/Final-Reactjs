import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
class SanPhamHot extends Component {
	 constructor(props){
        super(props)
        this.state = {
           products : [],
           keyword : '',
        }
    }    
    componentDidMount(){
      axios({
        method: 'GET',
        url :'http://localhost:3000/products',
        data : null
      }).then(res =>{
        this.setState({
          products :res.data
        });
      }).catch( err =>{
      });
    }

    onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      });
    }

    render() {
    var { keyword } = this.state;
    let search = this.state.products.filter(
      (product) =>{
        return product.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
      }
    );
  	return (
       <React.Fragment>        
  		    <div className="text-center">
          <div className="btn-group button_margin">
        <NavLink className="navbar-brand" to="/sanphammoi"><button type="button" className="btn btn-outline-warning btn-menu">Sản Phẩm Mới</button></NavLink>
        </div>
        <div className="btn-group">
        <NavLink className="navbar-brand" to="/sanphamhot"><button type="button" className="btn btn-outline-danger btn-menu">Sản Phẩm Hot</button></NavLink>
        </div>
        <div className="btn-group">
        <NavLink className="navbar-brand" to="/sanphamkhuyenmai"><button type="button" className="btn btn-outline-success btn-menu">Sản Phẩm KM</button></NavLink>
        </div>
       <input className="form-control mr-sm-2 search" name="keyword" value={keyword} onChange ={ this.onChange} type="search" placeholder="Search" aria-label="Search" /> 
  						{search.map((product,index) => {
                         return < Item key={index} product={product} />
                })}
      	 </div>
        </React.Fragment>
   		);
	}
}

class Item extends Component {
    onClickThis(){
        alert('Cảm ơn đã đặt hàng');
    }
    render() {
      var {product} = this.props;
      if(product.salePrice ==="")
        return (
          <div className="card" style={{width: '20rem'}}>
            <div className ="img-hover-zoom">
              <img src={this.props.product.image} className="image" alt="..." />
              <div className ="style"> 
                {this.showIcon(product.promotion)}
              </div>
            </div>
            <div className="card-body">
            <button type="col-md-6 button" onClick={this.onClickThis} className="btn btn-dark">Đặt hàng</button>
            <NavLink type="col-md-6 button" className="btn btn-danger xemchitiet" to={`/products/${this.props.product.id}/productdetail`}>Xem chi tiết</NavLink>
            </div>
            <div className="card-body">
        		<h5 className="card-title">{this.props.product.name}</h5>
        		
            <span className="col-md-12 price"><p className="card-text text-center text-danger">{this.props.product.price} đ</p></span>
      		</div>
          </div> 

        );
                else return(
          <div className="card" style={{width: '20rem'}}>
            <div className ="img-hover-zoom">
              <img src={this.props.product.image} className="image" alt="..." />
              <div className ="style"> 
                {this.showIcon(product.promotion)}
              </div>
            </div>
            <div className="card-body">
            <button type="col-md-6 button" onClick={this.onClickThis} className="btn btn-dark">Đặt hàng</button>
            <NavLink type="col-md-6 button" className="btn btn-danger xemchitiet" to={`/products/${this.props.product.id}/productdetail`}>Xem chi tiết</NavLink>
            </div>
            <div className="card-body">
        		<h5 className="card-title">{this.props.product.name}</h5>
            <span className="col-md-6 price"><p className="card-text text-center text-danger">{this.props.product.salePrice} đ</p></span>

            <span className="col-md-6 sale"><p className="card-text"><strike className="text-secondary">{this.props.product.price} đ</strike></p></span>
      		</div>
          </div> 
        );

    }

    showIcon(promotion){
      var kq = '';
      if (promotion === 'New') {
          kq = <img src="images/iconNew.png" />
      }else if (promotion === 'Hot') {
          kq = <img src="images/iconHot.png" />
      }else if (promotion === 'Sale Off'){
          kq = <img src="images/iconSale.png" />
      }
      return kq;
    }
}


export default SanPhamHot;