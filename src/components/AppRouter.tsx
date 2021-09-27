import  { FC } from "react";
import { Redirect, Route, Switch } from "react-router";
import { privateRoutes, publicRoutes, RouteNames } from '../router/index';
import { useTypedSelector } from '../hooks/useTypedselector';

export const AppRouter: FC = () => {
  const {isAuth} = useTypedSelector(state => state.auth) 
  return (
      isAuth 
      ? 
        <Switch>
            {privateRoutes.map(route => 
                <Route 
                    path={route.path} 
                    exact={route.exact} 
                    component={route.component}
                    key={route.path}
                />
            )}
            <Redirect to={RouteNames.EVENT} />
        </Switch>
       : 
        <Switch>
            {publicRoutes.map(route => 
                <Route 
                    path={route.path} 
                    exact={route.exact} 
                    component={route.component}
                    key={route.path}
                />
            )}
            <Redirect to={RouteNames.LOGIN} />
        </Switch>
  );
};
