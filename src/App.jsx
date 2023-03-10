import './main.css'
import { Route, Routes } from '@solidjs/router'

import Home from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
    </Routes>
  )
}
