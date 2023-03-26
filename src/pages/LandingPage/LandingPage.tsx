import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import './landingpage.scss'
import BackgroundImage from './../../assets/landing-page/brooke-lark-W1B2LpQOBxA-unsplash.jpg'

function LandingPage() {
	const navigate = useNavigate()
	const navigateToHome = () => {
		navigate('home')
	}
	return (
		<div className='landing-page-container'>
			<header>
				<Header />
			</header>
			<div className='shop-now'>
				<h1 className='shop-now-text' onClick={navigateToHome}>
					Shop Now
				</h1>
			</div>
		</div>
	)
}

export default LandingPage
