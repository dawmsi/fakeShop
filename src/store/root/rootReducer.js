import { combineReducers } from 'redux'
import { productReducer } from 'store/productsReducer'
import { cartReducer } from '../cartProductsReducer'
import { productsLikeReducer } from '../productsLikeReducer'

export const rootReducer = combineReducers({
    productsLikeState: productsLikeReducer,
    productsInCart: cartReducer,
    products: productReducer,
})

