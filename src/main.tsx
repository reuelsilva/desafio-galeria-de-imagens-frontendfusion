import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App.tsx'
import './index.css'
import ContextProvider from './contexts/gallery-context.tsx'
import NavigationProvider from './contexts/navigation-context.tsx'
import StorageProvider from './contexts/localstorage-context.tsx'

const myClient = new QueryClient();

const rootElement = document.getElementById('root');

if(rootElement){
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ContextProvider>
        <NavigationProvider>
          <StorageProvider>
            <QueryClientProvider client={myClient}>
              <App />
            </QueryClientProvider>
          </StorageProvider>
        </NavigationProvider>
      </ContextProvider>
    </React.StrictMode>,
  )
}