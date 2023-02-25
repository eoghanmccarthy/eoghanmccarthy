import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { DialogsProvider, ErrorBoundary } from '@eoghanmccarthy/ui'

import './styles.css'

import App from './App'

const MOUNT_NODE = document.getElementById('root')

render(
  <BrowserRouter>
    <ErrorBoundary>
      <DialogsProvider>
        <App />
      </DialogsProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  MOUNT_NODE
)
