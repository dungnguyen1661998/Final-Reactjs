import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Add from '../Add.js'
class AdminProduct extends Component{
  constructor(props){
    super(props)
    this.state = {
       products : [],
       keyword : '',
    }
    this.delete = this.delete.bind(this);
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
delete() {
  axios.get('http://localhost:4000/business/delete/'+this.props.products.id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
}

onChange = (event) =>{
  var target = event.target;
  var name = target.name;
  var value = target.value;
  this.setState({
    [name] : value
  });
}
removeProduct(e) {
  var array = [...this.state.products]; 
  var index = array.indexOf(e.target.value)
  if (index !== -1) {
    array.splice(index, 1);
    this.setState({products: array});
  }
}
    render(){
      var { keyword } = this.state;
    let search = this.state.products.filter(
      (product) =>{
        return product.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
      }
    );
        return(
            <div className="container-fluid">
              
                {/* Page Wrapper */}
        <div id="wrapper">
          {/* Sidebar */}
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink" />
              </div>
              <div className="sidebar-brand-text mx-3">Home Client</div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
              <a className="nav-link" href="/Management">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span>Dashboard</span></a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">
              Interface
            </div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
              <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-cog" />
                <span>Components</span>
              </a>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Components:</h6>
                  <a className="collapse-item" href="/A-product">Products Management</a>
                  <a className="collapse-item" href="cards.html">Cards</a>
                </div>
              </div>
            </li>
          
           
          </ul>
          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              
              {/* End of Topbar */}
              {/* Begin Page Content */}
              <div className="container-fluid">
                <br/>
              <input style={{float:'right'}} className="form-control col-md-2 search" name="keyword" value={keyword} onChange ={ this.onChange} type="search" placeholder="Search" aria-label="Search" /> 
              <br></br>
              
              <button type="button" className="btn btn-success btn-menu" data-toggle="modal" data-target="#myModal">
        Add New Product
      </button>
        {/* Page Heading */}
        <h1 className="h3 mb-2 text-gray-800">Proucts</h1>
        <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>
        {/* DataTales Example */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">DataTables</h6>
          </div>
          <div className="card-body">
            {/*  */}
            <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
            
                    
              <th className="text-center">Product Name</th>
              <th>Price</th>
              <th>Sale Price</th>
              <th>Category Name</th>
              <th className="text-left">Type</th>
             
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            
            {search.map((product,index) => {
                         return < TdProduct key={index} product={product} />
                })}
              
              
              
            
            
            
          </tbody>
        </table>
      </div>
           
          </div>
        </div>
      </div>
      {/* /.container-fluid */}
              {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Your Website 2019</span>
                </div>
              </div>
            </footer>
            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* <!-- The Modal --> */}
      
  <div className="modal fade" id="myModal">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div className="modal-header">
          <h4 className="modal-title">Thêm Mới Sản Phẩm</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div className="modal-body">
         
        <Add/>
        </div>
        
        {/* <!-- Modal footer --> */}
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  
       
  </div>
        );
    }
}
class TdProduct extends Component{
  
  render(){
    var {product} = this.props;
    return(
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.salePrice}</td>
        <td>{product.categoryName}</td>
        <td>{product.type}</td>
        
        <td className="td-actions text-center">
        <NavLink style={{background:'red', border:'none'}} type="button"  className="btn btn-success btn-just-icon btn-sm" to={`/products/${this.props.product.id}/productdetail`}><i style={{border:'none',background:'linear-gradient(#17EAD9, #6078EA)'}} className="material-icons">person</i></NavLink>
                 <button type="button" rel="tooltip" className="btn btn-success btn-just-icon btn-sm">
                  <i className="material-icons">edit</i>
                </button>
                <button type="button" rel="tooltip" className="btn btn-danger btn-just-icon btn-sm">
                  <i className="material-icons">close</i>
                </button>
                
              </td>
              
      </tr>
    );
  }
}
export default AdminProduct;