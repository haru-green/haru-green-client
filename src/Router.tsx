import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Quiz from '@/pages/Quiz';
import Result from '@/pages/Result';
import Root from '@/Root';
import ErrorElement from '@/shared/ErrorElement';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/login',
        element: <Login />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/quiz/:id',
        element: <Quiz />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/result',
        element: <Result />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorElement />,
      },
      {
        path: '*',
        element: <ErrorElement />,
      },
    ],
  },
]);

export default Router;
