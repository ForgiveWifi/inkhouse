import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NotificationsProvider } from '@mantine/notifications';
import { SkeletonTheme } from 'react-loading-skeleton'
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH_DOMAIN
const clientId = process.env.REACT_APP_AUTH_CLIENT_ID

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      <NotificationsProvider position='bottom-center' autoClose={5000} zIndex={10000}>
        <SkeletonTheme baseColor="rgba(255, 255, 255, 0.2)" highlightColor="rgba(255, 255, 255, 0.2)"> 
          <App />
        </SkeletonTheme>
      </NotificationsProvider>
    </Auth0Provider> 
  </React.StrictMode> 
);

