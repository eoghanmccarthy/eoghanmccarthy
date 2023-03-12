import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { DialogsProvider, ErrorBoundary } from '@eoghanmccarthy/ui'

import App from './App'

import './styles.css'

const queryClient = new QueryClient()

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ErrorBoundary>
        <DialogsProvider>
          <App />
        </DialogsProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </QueryClientProvider>
)
