import React from 'react'
import { useCart } from '../../context/useCart'
import Header from '../../components/Header/Header'
import SingleProduct from '../../components/SignleProduct/SingleProduct'

export default function CartPage() {
	const { state, dispatch } = useCart()
	const { cart } = state

	return (
		<div className='home-page-container'>
			<header>
				<Header />
			</header>
			<h1>Cart Page</h1>
			<div className='product-container'>
				<div>
					<div className='products'>
						{cart.length === 0 ? (
							<h1>Cart is Empty</h1>
						) : (
							<div>
								{cart.map((product) => {
									return (
										<div>
											<SingleProduct prod={product} />
											<div>Quantity: {product.qty}</div>
											<button
												onClick={() =>
													dispatch({
														type: 'CHANGE_CART_QTY',
														payload: {
															id: product.id,
															qty: product.qty + 1,
														},
													})
												}
											>
												+
											</button>
											<button
												onClick={() =>
													dispatch({
														type: 'CHANGE_CART_QTY',
														payload: {
															id: product.id,
															qty: product.qty - 1,
														},
													})
												}
											>
												-
											</button>
										</div>
									)
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
