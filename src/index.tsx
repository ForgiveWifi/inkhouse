import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider>
      <NotificationsProvider position='bottom-center' zIndex={10000}>
        <App />
      </NotificationsProvider>
    </MantineProvider>
  </React.StrictMode>
);

