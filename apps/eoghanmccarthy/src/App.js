import React, { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useDialogsContext } from '@eoghanmccarthy/ui'

const Home = lazy(() => import('pages/index'))
import Posts from 'pages/posts'

const App = () => {
  const dialog = useDialogsContext()
  const location = useLocation()

  useEffect(() => {
    if (location) {
      dialog.clear()
    }
  }, [location])

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="posts/*" element={<Posts />} />
        <Route path={'*'} element={<Home />} />
      </Routes>
    </Suspense>
  )
}

export default App
