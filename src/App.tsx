import { useState } from 'react'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Home from './pages/HomePage/Home'
import CartPage from './pages/CartPAge/CartPage'
import SingleProductPage from './pages/SingleProduct/SingleProduct'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='home' element={<Home />} />
				<Route path='cart' element={<CartPage />} />
				<Route path='product-view' element={<SingleProductPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
