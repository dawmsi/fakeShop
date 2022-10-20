import { omit } from 'lodash'

export const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return {
                ...state,
                [action.id]: (state[action.id] || 0) + action.count,
            }
        case 'REMOVE__PRODUCT_FROM_CART':
            return omit(state, action.id)

        case 'CHANGE_PRODUCT_QUANTITY':
            return { ...state, [action.id]: action.count }
        default:
            return state
    }
}

//  default cartReducer
