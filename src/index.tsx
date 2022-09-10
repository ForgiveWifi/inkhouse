import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { SkeletonTheme } from 'react-loading-skeleton'
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  //   <Auth0Provider
  //     domain=
  //     clientId=
  //     redirectUri={window.location.origin}
  //   >
      <MantineProvider>
        <NotificationsProvider position='bottom-center' autoClose={5000} zIndex={10000}>
          <SkeletonTheme baseColor="rgba(255, 255, 255, 0.2)" highlightColor="rgba(255, 255, 255, 0.2)"> 
            <App />
          </SkeletonTheme>
        </NotificationsProvider>
      </MantineProvider>
    // </Auth0Provider> 
  // </React.StrictMode> 
);

