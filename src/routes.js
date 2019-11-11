import React from 'react';
import SanPhamHot from './components/SanPhamHot.js';
import SanPhamKhuyenMai from './components/SanPhamKhuyenMai.js';
import SanPhamMoi from './components/SanPhamMoi.js';
import Home from './components/client/Home.js';
import ProductDetail from './components/ProductDetail.js';
import NotFound from './components/NotFound.js';
import Add from './components/Add.js';
import Management from './components/server/HomeAdmin.js';
import AdminProduct from './components/server/AdminProducts';


const routes = [
	{
		path : '/add',
		exact : true,
		main : ({history})=> <Add history={history} />
	},
	{
		path : '/Management',
		exact : true,
		main : ()=> <Management />
	},
	{
		path : '/A-product',
		exact : true,
		main : ()=> <AdminProduct />
	},
	{
		path : '/',
		exact : true,
		main : ()=> <Home />
	},
	{
		path : '/products/:id/productdetail',
		exact : true,
		main : ({match})=> <ProductDetail  match ={match}/>
	},
	{
		path : '/sanphamhot',
		exact : true,
		main : ({match})=> <SanPhamHot match ={match}/>
	},
	{
		path : '/sanphamkhuyenmai',
		exact : true,
		main : ({match})=> <SanPhamKhuyenMai match ={match}/>
	},
	{
		path : '/sanphammoi',
		exact : true,
		main : ({match})=> <SanPhamMoi match ={match}/>
	},
	{
		path : '',
		exact : false,
		main : ()=> <NotFound />
	},
];

export default routes;