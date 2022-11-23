import React, { useEffect /* useState */ } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import '../App/App.css'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'
import { useDispatch } from 'react-redux'
import { fetchProducts } from 'store/productsReducer'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <>
            <CssBaseline />
            <Header />
            <div className="wrapper">
                <Main />
            </div>
            <Footer />
        </>
    )
}

export default App

// const [productsInCart, setProductsInCart] = useState({})

// const [likeProductsState, setLikeProductsState] = useState({})

// const changeLike = (id) => {
//     setLikeProductsState((prevState) => ({
//         ...prevState,
//         [id]: !prevState[id],
//     }))
// }

/*     const addProductToCart = (id, count) => {
        setProductsInCart((prevState) =>
            Object.assign({}, prevState, {
                [id]: (prevState[id] || 0) + count,
            })
        )
    } 

    const changeProductQuantity = (id, count) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }

    const removeProductFromCart = (id) => {
        setProductsInCart((prevState) => {
            const prevProductInCart = { ...prevState }
            delete prevProductInCart[id]
            return prevProductInCart

            return omit(prevState, [id])
        })
    } */

/* productsInCart={productsInCart} */

// likeProductsState={likeProductsState}
// changeLike={changeLike}
/* productsInCart={productsInCart}
                    addProductToCart={addProductToCart}
                    changeProductQuantity={changeProductQuantity}
                    removeProductFromCart={removeProductFromCart} */
