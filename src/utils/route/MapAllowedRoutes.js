import React, { memo } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const MapAllowedRoutes = (props) => {
  const { routes, basePath, isAddNotFound } = props;
  const match = useRouteMatch(basePath);

  console.log(routes);
  return (
    <Switch>
      {routes.map((route) => {
        const {
          path,
          component: Component,
          children,
          title,
          permission,
          ...rest
        } = route;
        return (
          <Route {...rest} key={path} path={`${match.path}${path}`}>
            <Component children={children} />
          </Route>
        );
      })}
    </Switch>
  );
};

export default memo(MapAllowedRoutes);
