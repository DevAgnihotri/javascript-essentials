import React, { Component } from 'react'
import {
  Link
}  from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavCollapsed: true
    };
  }

  handleNavCollapse = () => {
    this.setState({isNavCollapsed: !this.state.isNavCollapsed});
  }

  render() {
    const { isNavCollapsed } = this.state;
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <button 
                  className="navbar-toggler" 
                  type="button" 
                  onClick={this.handleNavCollapse}
                  aria-controls="navbarSupportedContent" 
                  aria-expanded={!isNavCollapsed} 
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/" onClick={this.handleNavCollapse}>Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/" onClick={this.handleNavCollapse}>About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/entertainment" onClick={this.handleNavCollapse}>Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/business" onClick={this.handleNavCollapse}>Business</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/health" onClick={this.handleNavCollapse}>Health</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/science" onClick={this.handleNavCollapse}>Science</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/sports" onClick={this.handleNavCollapse}>Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/technology" onClick={this.handleNavCollapse}>Technology</Link></li>      
                </ul>
                
                </div>
            </div>
        </nav>
    )
  }
}

export default Navbar
