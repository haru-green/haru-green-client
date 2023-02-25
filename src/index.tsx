import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import Router from './Router';
import './assets/styles/index.scss';

export const QuizContext = createContext<boolean[]>([]);
const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <QuizContext.Provider value={[]}>
      <RouterProvider router={Router} />
    </QuizContext.Provider>
  </React.StrictMode>
);
