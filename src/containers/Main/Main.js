import React from 'react'
import { Container } from '@mui/material'
import '../Main/Main.css'
import { ProductsList } from 'components/Products/ProductsList'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from 'pages/HomePage/HomePage'
import CartPage from 'pages/CartPage/CartPage'
import { PaymentPage } from 'pages/PaymentPage/PaymentPage'
import { ShippingPage } from 'pages/ShippingPage/ShippingPage'

export const Main = () => {
    return (
        <main>
            <Container className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="products" element={<ProductsList />} />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="shiping" element={<ShippingPage />} />
                    <Route path="cart" element={<CartPage />} />
                </Routes>
            </Container>
        </main>
    )
}

/*     {
    likeProductsState,
    changeLike,
    productsInCart,
    addProductToCart,
    changeProductQuantity,
    removeProductFromCart,
} */

/* addProductToCart={addProductToCart}
                                likeProductsState={likeProductsState}
                                changeLike={changeLike} */

/* productsInCart={productsInCart}
                                changeProductQuantity={changeProductQuantity}
                                removeProductFromCart={removeProductFromCart} */
