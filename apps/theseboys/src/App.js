import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Footer } from 'components'
import Home from 'pages/home'
import Studio from 'pages/studio'
import Box from 'pages/box'
import Poly from 'pages/poly'
import Oscillator from 'pages/oscillator'
import X from 'pages/x'
import { MasterProvider } from 'features/master'

const App = () => (
  <div className={'me'}>
    <Routes>
      <Route index element={<Home />} />
      <Route path="studio/*" element={<StudioRoutes />} />
      <Route path={'*'} element={<Home />} />
    </Routes>
  </div>
)

const StudioRoutes = () => (
  <>
    <Routes>
      <Route
        index
        element={
          <MasterProvider>
            <Studio />
          </MasterProvider>
        }
      />
      <Route
        path="box"
        element={
          <MasterProvider>
            <Box />
          </MasterProvider>
        }
      />
      <Route
        path="poly"
        element={
          <MasterProvider>
            <Poly />
          </MasterProvider>
        }
      />
      <Route
        path="oscillator"
        element={
          <MasterProvider>
            <Oscillator />
          </MasterProvider>
        }
      />
      <Route path="x" element={<X />} />
    </Routes>
    <Footer />
  </>
)

export default App
