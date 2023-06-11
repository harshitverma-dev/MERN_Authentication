import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainContext from './context/context';
import AuthContext from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContext>
    <MainContext>
      <App />
    </MainContext>
  </AuthContext>
);


