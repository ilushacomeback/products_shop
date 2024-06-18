import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Provider } from 'react-redux';
import { RouterProvider } from './providers/route/index';
import { AuthProvider } from '../shared/index';
import { store } from '../shared/index';
import { Navbar } from '../widgets';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider>
          <Navbar />
        </RouterProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
