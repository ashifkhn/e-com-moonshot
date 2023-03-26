import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import { CartContextProvider } from './context/useCart'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<div className='main'>
		<CartContextProvider>
			<App />
		</CartContextProvider>
	</div>
)
