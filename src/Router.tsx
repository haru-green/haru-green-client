import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Quiz from '@/pages/Quiz';
import Result from '@/pages/Result';
import Root from '@/Root';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/quiz',
        element: <Quiz />,
      },
      {
        path: '/result',
        element: <Result />,
      },
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default Router;
