import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import './homepage.scss'
import { ClimbingBoxLoader } from 'react-spinners'
import ProductPreview from '../../components/ProductPreview/ProductPreview'
import { useCart } from '../../context/useCart'
import SingleProduct from '../../components/SignleProduct/SingleProduct'
import { useNavigate } from 'react-router-dom'

function Home() {
	const [products, setProducts] = useState<[]>([])
	const [loader, setLoader] = useState(true)
	const [searchQuery, setSearchQuery] = useState('')

	const { state, dispatch } = useCart()
	const { cart } = state
	console.log(cart)
	const getProducts = () => {
		axios.get('https://fakestoreapi.com/products').then((response) => {
			console.log(response.data)
			setProducts(response.data)
			setLoader(false)
		})
		console.log('hello')
	}

	const SearchHandler = (e) => {
		e.preventDefault()
		setSearchQuery(e.target.value)
	}

	console.log(searchQuery)

	const navigate = useNavigate()

	useEffect(() => {
		getProducts()
	}, [])

	return (
		<div className='home-page-container'>
			<header>
				<Header />
			</header>
			<div className='search-bar'>
				<input
					type='text'
					placeholder='Search'
					value={searchQuery}
					onChange={SearchHandler}
				/>
				<button type='submit'>Go</button>
			</div>
			<div className='product-container'>
				<div>
					{loader ? (
						<div className='loader'>
							<ClimbingBoxLoader />
						</div>
					) : (
						<div className='products'>
							{products
								.filter((item) => {
									return searchQuery.toLowerCase() === ''
										? item
										: item.title.toLowerCase().includes(searchQuery)
								})
								.map((product) => {
									return <SingleProduct prod={product} />
								})}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Home
