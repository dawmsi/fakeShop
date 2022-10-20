import axios from 'axios'

export const fetchProducts = () => async (dispatch) => {
    const { data } = await axios.get(
        'https://run.mocky.io/v3/ea7b7859-1a85-421a-b5df-cd143774ded6'
    )
    dispatch({
        type: 'PRODUCTS_SUCCESS',
        products: data.products,
    })
}

export const productReducer = (state = [], action) => {
    switch (action.type) {
        case 'PRODUCTS_SUCCESS':
            return action.products

        default:
            return state
    }
}
