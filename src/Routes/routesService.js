import { Route, Redirect } from "react-router-dom";
import React from "react";

import routes from "./routes";
import page404_ from "../layouts/404";

export function getRoutes(layout) {
  const Routes_ = routes.map((prop, key) => {
    if (prop.layout === layout) {
      return (
        <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
  Routes_.push(<Redirect to="/404" />);

  return Routes_;
}
