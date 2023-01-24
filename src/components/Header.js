import React, { Component } from "react";
import Navigation from "./Navigation.js";

class Header extends Component {
  titles = [];

  constructor () {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {

    let title = '';
    let name = '';

    // this is required in case data is missing or optional chaining.
    if (this.props.sharedData) {
      title = this.props.sharedData.titles;
      name = this.props.sharedData.name;
      //...map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    return (
      <header id="home" >
        <Navigation name={ name } checked={ this.state.checked } onThemeSwitchChange={ this.onThemeSwitchChange } title={ title } />
        <div className="row aligner" >
          <div className="col-md-12">
            <div>

              {/* Header Img Here. */ }
              <img id="header-background" src="images/home-background.png" alt="computer" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
