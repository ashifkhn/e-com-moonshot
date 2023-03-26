import React, { createContext, useContext, useReducer, useState } from 'react'
import { CartReducer } from '../reducer/CartReducer'

const CartContext = createContext()
const CartContextProvider = ({ children }) => {
	const [first, setfirst] = useState('second')
	const [state, dispatch] = useReducer(CartReducer, { cart: [] })
	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	)
}

const useCart = () => useContext(CartContext)

export { useCart, CartContextProvider }
