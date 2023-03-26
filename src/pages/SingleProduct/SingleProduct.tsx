import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import SingleProduct from '../../components/SignleProduct/SingleProduct'
import './../HomePage/homepage.scss'

export default function SingleProductPage() {
	const { state } = useLocation()
	console.log(state)

	return (
		<div>
			<Header />
			<SingleProduct prod={state.prod} />
		</div>
	)
}
