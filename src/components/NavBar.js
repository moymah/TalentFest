import React, { Component, Fragment }  from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";


export default class Navbar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
      return (
          <Fragment>
            <nav className="nav-wrapper orange darken-3">
              <Link to="/" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <Link to="/" className="brand-logo"></Link>
              <img src="../src/images/logo.png" alt='logo'></img>
            </nav>
          </Fragment>
      );
  }
}