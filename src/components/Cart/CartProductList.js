import React from 'react'
import { keys } from 'lodash'

import {
    getProductsObject,
    /* productsArray, */
} from 'components/Products/productsArray'
import { CartProductListItem } from './CartProduct'
import { connect } from 'react-redux'

const CartProductList = ({
    productsArray,
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
}) => {
    if (productsArray.length === 0) return null
    else
        return (
            <>
                {keys(productsInCart).map((productId) => (
                    <CartItem
                        key={productId}
                        product={productsObject[productId]}
                        productCount={productsInCart[productId]}
                    />
                ))}
            </>
        )
}

const mapStateToProps = (state) => ({
    productsArray: state.products,
})

export default connect(mapStateToProps)(CartProductList)

/* changeProductQuantity,
removeProductFromCart, */

/* changeProductQuantity={changeProductQuantity}
removeProductFromCart={removeProductFromCart} */
