import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Products from './Products.js'

class Home extends Component{
    render(){
        return(
            <div className="container-fluid">
      
    <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg" color-on-scroll={100}>
          <div className="container">
            <div className="navbar-translate">
              <a className="navbar-brand" href="/">
                Jayce </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon" />
                <span className="navbar-toggler-icon" />
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="/Management" className="nav-link">
                  Management
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        <div className="page-header header-filter" data-parallax="true" style={{backgroundImage: 'url("assets/img/demo-1-bg.jpg")'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto">
                <div className="brand text-center">
                  <h1>Title</h1>
                  <h3 className="title text-center">Subtitle</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main main-raised">
          <div className="container">
            <div className="section text-center">
              <h2 className="title">Content</h2>
              <Products/>
            </div>
          </div>
        </div>
        <footer className="footer footer-white footer-big">
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-md-2">
                <h5>About Us</h5>
                <ul className="links-vertical">
                  <li>
                    <a href="#pablo">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Presentation
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5>Market</h5>
                <ul className="links-vertical">
                  <li>
                    <a href="#pablo">
                      Sales FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      How to Register
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Sell Goods
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Receive Payment
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Transactions Issues
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Affiliates Program
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5>Social Feed</h5>
                <div className="social-feed">
                  <div className="feed-line">
                    <i className="fa fa-twitter" />
                    <p>How to handle ethical disagreements with your clients.</p>
                  </div>
                  <div className="feed-line">
                    <i className="fa fa-twitter" />
                    <p>The tangible benefits of designing at 1x pixel density.</p>
                  </div>
                  <div className="feed-line">
                    <i className="fa fa-facebook-square" />
                    <p>A collection of 25 stunning sites that you can use for inspiration.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h5>Follow Us</h5>
                <ul className="social-buttons">
                  <li>
                    <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="btn btn-just-icon btn-link btn-facebook">
                      <i className="fa fa-facebook-square" />
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="btn btn-just-icon btn-link btn-google">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#pablo" className="btn btn-just-icon btn-link btn-instagram">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
                <h5>Numbers Don't Lie</h5>
                <h4>14.521
                  <small>Freelancers</small>
                </h4>
                <h4>1.423.183
                  <small>Transactions</small>
                </h4>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright pull-center">
            Copyright ©
            Jayce
          </div>
        </div>
      </footer>
  </div>
    
        );
    }
}
export default Home;