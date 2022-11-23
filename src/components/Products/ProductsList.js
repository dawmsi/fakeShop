import React, { useState } from 'react'
import { Box, Grid, MenuItem, TextField } from '@mui/material'
import Product from 'components/Products/Product'

import { /* connect, */ useSelector } from 'react-redux'
// import { productsArrayLocal } from './productsArray'

export const ProductsList = () => {
    const [sizeMemory, setSizeMemory] = useState('all')

    const productsArray = useSelector((state) => state.products)

    return (
        <>
            <h1 className="page-title">ProductsList</h1>
            <div>
                <Box>
                    <TextField
                        fullWidth
                        select
                        label="Select size"
                        value={sizeMemory}
                        onChange={(event) => setSizeMemory(event.target.value)}
                    >
                        <MenuItem value={'all'}>All</MenuItem>
                        <MenuItem value={256}>256</MenuItem>
                        <MenuItem value={128}>128</MenuItem>
                        <MenuItem value={64}>64</MenuItem>
                        <MenuItem value={32}>32</MenuItem>
                    </TextField>
                </Box>
            </div>

            <Grid
                container
                direction="row"
                justifyContent="space-everly"
                alignItems="center"
                spacing={3}
            >
                {productsArray
                    .filter(
                        (el) =>
                            el.capacity === sizeMemory || sizeMemory === 'all'
                    )
                    .map(
                        ({
                            id,
                            image,
                            name,
                            description,
                            capacity,
                            type,
                            price,
                        }) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <Product
                                    id={id}
                                    image={image}
                                    name={name}
                                    description={description}
                                    capacity={capacity}
                                    type={type}
                                    price={price}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
        </>
    )
}

/* {
    likeProductsState,
    changeLike,
    addProductToCart,
} */

/*addProductToCart={addProductToCart}
isLiked={likeProductsState[id] || false}
changeLike={changeLike} */
