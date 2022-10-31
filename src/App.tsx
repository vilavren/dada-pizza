import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'

import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import FullPizza from './pages/FullPizza'

import './scss/app.scss'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>Идет загрузка...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route path="/pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
