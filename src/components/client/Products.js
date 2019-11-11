import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
class Products extends Component {
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

    render(){
      var { keyword } = this.state;
    let search = this.state.products.filter(
      (product) =>{
        return product.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
      }
    );
      return (
  
        <div className="cards">
          <div className="container">
            <div className="title">
              <h3>Products List</h3>
            </div>
            <div className="row">
              {/* <div className="col-md-4">
                <div className="card card-profile">
                  <div className="card-header card-header-image">
                    <a href="#pablo">
                      <img style={{width:'299.99px',height:'220px'}} className="img" src="./assets/img/laptop1.png" />
                      <div className="card-title">
                      <img style={{width:'50px',height:'30px'}} src="images/iconNew.png" />
                      </div>
                    </a>
                  </div>
                  <div className="card-body ">
                    <h6 className="card-category text-info">Product Name</h6>
                    <h3 class="card-title">$29</h3>
                   
                    <h3 class="card-title" style={{textDecoration: 'line-through', color: 'red'}}>$50</h3>
                    <a href="#pablo" class="btn btn-info btn-round">Buying</a>
                  </div>
                  
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-profile">
                  <div className="card-header card-header-image">
                    <a href="#pablo">
                    <img style={{width:'299.99px',height:'220px'}} className="img" src="./assets/img/laptop.png" />
                      <div className="card-title">
                      <img style={{width:'50px',height:'30px'}} src="images/iconSale.png" />
                      </div>
                    </a>
                  </div>
                  <div className="card-body ">
                    <h6 className="card-category text-info">Product Name</h6>
                    <h3 class="card-title">$29</h3>
                    <h3 class="card-title" style={{textDecoration: 'line-through', color: 'red'}}>$50</h3>
                    <a href="#pablo" class="btn btn-info btn-round">Buying</a>
                  </div>
                  
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-profile">
                  <div className="card-header card-header-image">
                    <a href="#pablo">
                      <img style={{width:'299.99px',height:'220px'}} className="img" src="./assets/img/laptop2.png" />
                      <div className="card-title">
                      <img style={{width:'50px',height:'30px'}} src="images/iconNew.png" />
                      </div>
                    </a>
                  </div>
                  <div className="card-body ">
                    <h6 className="card-category text-info">Product Name</h6>
                    <h3 class="card-title">$29</h3>
                    <h3 class="card-title" style={{textDecoration: 'line-through', color: 'red'}}>$50</h3>
                    <a href="#pablo" class="btn btn-info btn-round">Buying</a>
                  </div>
                  
                </div>
              </div> */}
              <input className="form-control mr-sm-2 search" name="keyword" value={keyword} onChange ={ this.onChange} type="search" placeholder="Search" aria-label="Search" /> 
  						{search.map((product,index) => {
                         return < Item key={index} product={product} />
                })}
              
            </div>
          </div>
        </div>
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
          // 
          <div className="col-md-4">
                <div className="card card-profile">
                  <div className="card-header card-header-image">
                    <a href="#pablo">
                      <img style={{width:'299.99px',height:'220px'}} className="img" src={this.props.product.image} />
                      <div className="card-title">
                      {this.showIcon(product.promotion)}
                      </div>
                    </a>
                  </div>
                  <div className="card-body " style={{height:'209px'}}>
                    <h6 className="card-category text-info">{this.props.product.name}</h6>
                    <h3 className="card-title">${this.props.product.price}</h3>
                    <NavLink type="col-md-6 button" className="btn btn-danger xemchitiet" to={`/products/${this.props.product.id}/productdetail`}>Xem chi tiết</NavLink>
                    {/* <h3 class="card-title" style={{textDecoration: 'line-through', color: 'red'}}>${this.props.product.price}</h3> */}
                    <a style={{bottom:'-45px'}} onClick={this.onClickThis} href="#pablo" className="btn btn-info btn-round">Buying</a>
                  </div>
                  
                </div>
              </div>
          

        );
                else return(
                  <div className="col-md-4">
                  <div className="card card-profile">
                    <div className="card-header card-header-image">
                      <a href="#pablo">
                        <img style={{width:'299.99px',height:'220px'}} className="img" src={this.props.product.image} />
                        <div className="card-title">
                        {this.showIcon(product.promotion)}
                        </div>
                      </a>
                    </div>
                    <div className="card-body ">
                      <h6 className="card-category text-info">{this.props.product.name}</h6>
                      <h3 className="card-title">$29</h3>
                      <h3 className="card-title" style={{textDecoration: 'line-through', color: 'red'}}>${this.props.product.price}</h3>
                      <a onClick={this.onClickThis} href="#pablo" className="btn btn-info btn-round">Buying</a>
                    </div>
                    
                  </div>
                </div>
        );

    }

    showIcon(promotion){
      var kq = '';
      if (promotion === 'New') {
          kq = <img style={{width:'50px',height:'30px'}} src="images/iconNew.png" />
      }else if (promotion === 'Hot') {
          kq = <img style={{width:'50px',height:'30px'}} src="images/iconHot.png" />
      }else if (promotion === 'Sale Off'){
          kq = <img style={{width:'50px',height:'30px'}} src="images/iconSale.png" />
      }
      return kq;
    }
}

  export default Products;