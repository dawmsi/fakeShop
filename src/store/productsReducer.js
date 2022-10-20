import axios from 'axios'

export const fetchProducts = () => (dispatch) => {
    axios
        .get('https://run.mocky.io/v3/ea7b7859-1a85-421a-b5df-cd143774ded6')
        .then(res => res.data)
        .then((data) => {
            dispatch({
                type: 'PRODUCTS_SUCCESS',
                products: data.products,
            })
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
