import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useDialogsContext } from '@eoghanmccarthy/ui'

import Home from './pages'

const App = () => {
  const dialogCtx = useDialogsContext()
  const location = useLocation()

  useEffect(() => {
    if (location) {
      dialogCtx.clear()
    }
  }, [location])

  return (
    <div className="me">
      <header className="me__header" />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route element={<Home />} />
      </Routes>
      <footer className="me__footer" />
    </div>
  )
}

export default App
