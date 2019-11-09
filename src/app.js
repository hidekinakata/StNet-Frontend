import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./layouts/Home";
import AdminLayout from "./layouts/Admin";
import AuthLayout from "./layouts/Auth";
import Page404 from "./layouts/404";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      authenticated: false
    };
  }

  async verifyAuth() {
    // try {
    //   const response = await api.get("auth/is_authed", {
    //     headers: {
    //       authorization:
    //         "Bearer " + (localStorage.token || sessionStorage.token)
    //     }
    //   });
    //   await this.setState({ user: response.data.user });
    //   console.log(this.state);
    //   return true;
    // } catch (e) {
    //   return false;
    // }

    return true;
  }

  componentDidMount() {
    this.setState({
      authenticated: this.verifyAuth()
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthLayout} />
          <Route path="/admin" component={AdminLayout} />
          <Route render={props => <Page404 {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
