import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Feed } from 'pages/feed/Feed'
// import { Home } from 'pages/home/Home'
import { Login } from 'pages/login/Login'
import { Register } from 'pages/register/Register'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Feed />} />
          {/* <Route path="feed" element={<Feed />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
