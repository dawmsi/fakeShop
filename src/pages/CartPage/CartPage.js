import React from 'react'
import CartProductList from 'components/Cart/CartProductList'
import CartTotal from 'components/Cart/CartTotal'
import CartProductListItemExtended from 'components/Cart/CartProductExtended'
import { Grid } from '@mui/material'
import { connect } from 'react-redux'

const CartPage = ({ productsInCart }) => {
    return (
        <>
            <h1 className="page-title">Cart</h1>
            <Grid
                container
                direction="row"
                justifyContent="space-everly"
                alignItems="center"
                spacing={3}
            >
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart,
})

export default connect(mapStateToProps)(CartPage)

/*changeProductQuantity,
    removeProductFromCart, */

/*changeProductQuantity={changeProductQuantity}
removeProductFromCart={removeProductFromCart} */
