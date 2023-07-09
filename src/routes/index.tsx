import React from 'react';
import Minecraft from 'components/04-pages/Minecraft';
import App from 'App';

interface IRoute {
  path: string,
  element: React.ReactElement,
}

const ROUTES_APP: IRoute[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/minecraft',
    element: <Minecraft />,
  },

];

export default ROUTES_APP;
