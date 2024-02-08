import { match } from 'path-to-regexp';
import { Children, useEffect, useState } from "react";
import { EVENTS } from "./consts.js";

const Router = ({children, routes = [], defaultComponent: DefaultComponent = () => null}) =>
{
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(()=>
  {
    const onLocationChange = () =>
    {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () =>
    {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    }

  },[]);

  let routeParams = {}

  const routeFromChildren = Children.map(children , ({props, type})=>
  {
    const {name} = type;
    const isRoute = name === "Route";

    return isRoute? props : null;    
  });

  const routeToUse = routes.concat(routeFromChildren);

  const Page = routeToUse.find(({path}) => {
    if(path === currentPath) return true;

    const matchUrl = match(path, {decode : decodeURIComponent});
    const matched = matchUrl(currentPath);

    if(!matched) return false;

    routeParams = matched.params;
    return true;

  })?.Component;

  return Page ? <Page routeParams={routeParams}/>: <DefaultComponent routeParams={routeParams}/>;
}

export default Router;