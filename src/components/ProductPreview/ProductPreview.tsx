import React from 'react'
import './ProductPreview.scss'

const ProductPreview = ({ product }) => {
	return (
		<div className='product-preview-container'>
			<h1 style={{ color: '#000' }}>{product.title}</h1>
			<img src={product.images[0]} alt='' srcset='' className='product-image' />
		</div>
	)
}

export default ProductPreview
