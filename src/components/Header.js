import React, { Component } from "react";
import Navigation from "./Navigatioin.js";

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
    if (this.props.sharedData) {
      this.titles = this.props.sharedData.titles;
      //...map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

    const HeaderTitleTypeAnimation = React.memo(() => {
      return this.titles
    }, (props, prevProp) => true);

    return (
      <header id="home" >
        <Navigation checked={ this.state.checked } onThemeSwitchChange={ this.onThemeSwitchChange } name={ this.props.sharedData.name } />
        <div className="row aligner" >
          <div className="col-md-12">
            <div>
              {/* Title - This is hidden behind fixed nav.
              <HeaderTitleTypeAnimation />
              */ }

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
