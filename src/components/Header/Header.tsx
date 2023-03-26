import React from 'react'
import './header.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/useCart'

function Header() {
	const navigate = useNavigate()
	const navigateToCart = () => {
		navigate('/cart')
	}
	const { state, dispatch } = useCart()
	const { cart } = state
	return (
		<div className='header-container'>
			<div className='header-item-left' onClick={() => navigate('/')}>
				LOGO
			</div>
			<div className='header-item-right'>
				<li>
					<ul>
						<NavLink to='/news'>News</NavLink>
					</ul>
					<ul>
						<NavLink to='/offers'>Offers</NavLink>
					</ul>
					<ul>
						<NavLink to='/accessories'>Accessories</NavLink>
					</ul>
					<ul>
						<NavLink to='/gifts'>Gift Finder</NavLink>
					</ul>
				</li>
			</div>
			<div className='header-item-left' onClick={navigateToCart}>
				<h2 className='cart-header'>Cart ({cart.length})</h2>
			</div>
		</div>
	)
}

export default Header
