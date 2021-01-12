import React, {Component} from 'react';

import Aux from '../Aux/Aux'
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerToggleHandler = () => {
    this.setState(prevState => ({showSideDrawer: !prevState.showSideDrawer}))
  }

  render() {
    return (
      <Aux>
        <Toolbar sideDrawerOpened={this.state.showSideDrawer} sideDrawerToggled={this.sideDrawerToggleHandler} />
        <main>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;