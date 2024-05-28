import React from "react";
import ReactDOM from 'react-dom';
import App from './components/app.js'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="dev-7wrcr201frib5e12.us.auth0.com"
    clientId="wybWLyGVFN6QBSZQSQn53223PFtmQ5Ze"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/download"
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);