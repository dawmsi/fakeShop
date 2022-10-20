import React, { useState } from 'react'
import { Card, Button, CardActions, CardContent } from '@mui/material'
import './Product.css'
import { PropTypes } from 'prop-types'
import { Quantity } from 'components/Quantity/Quantity'
import {
    Favorite,
    FavoriteBorder,
    AddShoppingCartOutlined,
} from '@mui/icons-material'
import { connect } from 'react-redux'

const Product = ({
    id,
    name,
    description,
    type,
    capacity,
    price,
    image,
    addProductToCart,
    isLiked,
    addLike,
    removeLike,
}) => {
    // const isLiked = useSelector((state)=> state[id] || false)

    const [count, setCount] = useState(1)
    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={/* '/images' + */ image} alt="" />
                    </div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    {/* <div className="product-color">{color}</div>
                    <Button onClick={changeColor}>Change color</Button> */}
                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">Capacity: {capacity}</div>
                    <div className="product-price">{price} $</div>

                    <Quantity
                        onDecrement={() => setCount(count - 1)}
                        onIncrement={() => setCount(count + 1)}
                        count={count}
                    />
                </CardContent>
                <CardActions className="product-btn">
                    <Button
                        variant="outlined"
                        onClick={() => (isLiked ? removeLike(id) : addLike(id))}
                    >
                        {isLiked ? <Favorite /> : <FavoriteBorder />}
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => addProductToCart(id, count)}
                    >
                        <AddShoppingCartOutlined />
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}
Product.defaultProps = {
    description: 'No description',
    image: '/no.jpg',
}

const mapStateToProps = (state, { id }) => ({
    isLiked: state.productsLikeState[id],
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
    addProductToCart: (id, count) => dispatch({
        type: 'ADD_PRODUCT_TO_CART',
        id,
        count,
    }),
})

//export default Product

export default connect(mapStateToProps, mapDispatchProps)(Product)

// const [color, setColor] = useState('Green')
// const changeColor = () => {
//     setColor(color === 'Green' ? 'Red' : 'Green')
// }

// export class Product extends Component {
//     //1
//     // constructor(){
//     //     super()
//     //     this.onIncrementClick = this.onIncrementClick.bind(this)
//     // }

//     //2 ()=> in event
//     state = {
//         productCount: 1,
//         productColor: 'Green',
//     }
//     //3 ()=> in init
//     onIncrementClick = () => {
//         this.setState((prevState) => ({
//             productCount: prevState.productCount + 1,
//         }))
//     }
//     onDecrementClick = () => {
//         this.setState((prevState) => ({
//             productCount: prevState.productCount - 1,
//         }))
//     }
//     onColorClick = () => {
//         this.setState((prevState) => ({
//             productColor: prevState.productColor === 'Green' ? 'Red': 'Green',
//         }))
//     }
//     render() {
//         const { name, description, type, capacity, price, image } = this.props
//         return (
//             <>
//                 <Card>
//                     <CardContent>
//                         <div className="product-img">
//                             <img src={'/images' + image} alt="" />
//                         </div>
//                         <h4>{name}</h4>
//                         <p>{description}</p>
//                         <div className="product-color">
//                             {this.state.productColor}
//                         </div>
//                         <Button onClick={this.onColorClick}>
//                             Change color
//                         </Button>
//                         <div className="product-features">Type: {type}</div>
//                         <div className="product-features">
//                             Capacity: {capacity}
//                         </div>
//                         <div className="product-price">{price} $</div>
//                         <div className="product-quantity">
//                             <Button
//                                 variant="contained"
//                                 onClick={this.onDecrementClick}
//                                 disabled={this.state.productCount <= 1}
//                             >
//                                 -
//                             </Button>
//                             <TextField
//                                 size="small"
//                                 value={this.state.productCount}
//                             />
//                             <Button
//                                 variant="contained"
//                                 onClick={this.onIncrementClick}
//                                 disabled={this.state.productCount >= 10}
//                             >
//                                 +
//                             </Button>
//                         </div>
//                     </CardContent>
//                     <CardActions className="product-add">
//                         <Button variant="outlined">Add to cart</Button>
//                     </CardActions>
//                 </Card>
//             </>
//         )
//     }
// }
