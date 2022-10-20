import React from 'react'

export const CartProductListItem = ({ product, productCount }) => {
    return (
        <div>
            {product.name} : {productCount}
        </div>
    )
}
