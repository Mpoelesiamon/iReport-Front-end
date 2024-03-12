import React, { Component } from "react";
import { Menudata } from "./Menudata";
import "./FormStyles.css";


class NavBar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      
      <nav className="NavBarItems">
        <h1 className="logo">
          iReport 
        </h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menudata.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.icon && <i className={item.icon}></i>}
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
