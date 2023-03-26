import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/useCart'
import './style.scss'

export default function SingleProduct({ prod }) {
	const { state, dispatch } = useCart()
	const { cart } = state
	const navigate = useNavigate()
	const singleProductView = () => {
		navigate('/product-view', { state: { prod: prod } })
	}

	return (
		<div className='product-title-image'>
			<div onClick={singleProductView}>{prod.title}</div>
			<img
				src={prod.image}
				alt=''
				className='product-image'
				onClick={singleProductView}
			/>
			{cart.some((p) => p.id === prod.id) ? (
				<button
					onClick={() => {
						dispatch({
							type: 'REMOVE_FROM_CART',
							payload: prod,
						})
					}}
				>
					Remove from cart
				</button>
			) : (
				<button
					onClick={() => {
						dispatch({
							type: 'ADD_TO_CART',
							payload: prod,
						})
					}}
				>
					Add to cart
				</button>
			)}
		</div>
	)
}
