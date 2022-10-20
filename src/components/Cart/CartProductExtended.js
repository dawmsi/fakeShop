import {
    Favorite,
    FavoriteBorder,
    DeleteOutline,
    ShoppingCartCheckoutRounded,
} from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, Grid } from '@mui/material'
import { Quantity } from 'components/Quantity/Quantity'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const CartProductListItemExtended = ({
    product,
    productCount,
    changeProductQuantity,
    removeProductFromCart,
    isLiked,
    addLike,
    removeLike,
}) => {
    return (
        <Grid item xs={12} sm={6}>
            <Card key={product.id}>
                <CardContent>
                    <div className="product-img">
                        <img alt="" src={/* '/images' + */ product.image} />
                    </div>
                    <h4>{product.name}</h4>
                    <div>Price:{product.price}</div>

                    <Quantity
                        onDecrement={() =>
                            productCount === 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }
                        onIncrement={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                        count={productCount}
                        minCount={0}
                    />
                </CardContent>
                <CardActions className="product-btn">
                    <Button
                        onClick={() => removeProductFromCart(product.id)}
                        variant="outlined"
                    >
                        <DeleteOutline />
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            isLiked
                                ? removeLike(product.id)
                                : addLike(product.id)
                        }
                    >
                        {isLiked ? <Favorite /> : <FavoriteBorder />}
                    </Button>

                    <Button variant="outlined">
                        <Link to="/checkout">
                            <ShoppingCartCheckoutRounded />
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

const mapStateToProps = (state, { product }) => ({
    isLiked: state.productsLikeState[product.id],
})

const mapDispatchProps = (dispatch) => ({
    addLike: (id) =>
        dispatch({
            type: 'LIKE',
            id,
        }),
    removeLike: (id) =>
        dispatch({
            type: 'DISLIKE',
            id,
        }),
    removeProductFromCart: (id) =>
        dispatch({
            type: 'REMOVE__PRODUCT_FROM_CART',
            id,
        }),
    changeProductQuantity: (id, count) =>
        dispatch({
            type: 'CHANGE_PRODUCT_QUANTITY',
            id,
            count,
        }),
})

export default connect(
    mapStateToProps,
    mapDispatchProps
)(CartProductListItemExtended)
