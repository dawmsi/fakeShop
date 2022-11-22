export const getProductsObject = (array) => {
    return array.reduce(
        (obj, product) => ({
            ...obj,
            [product.id]: product,
        }),
        {}
    )
}

export const productsArrayLocal = [
    {
        id: 1,
        name: 'iPhone 13 Pro',
        description: 'This is Iphone',
        capacity: 256,
        type: 'phone',
        price: 1100,
        image: '/13.png',
    },
    {
        id: 2,
        name: 'iPhone 12 Pro',
        // description: 'This is Iphone 12',
        capacity: 128,
        type: 'phone',
        price: 900,
        image: '/12.png',
    },
    {
        id: 5,
        name: 'iPhone XR',
        description: 'This is Iphone XR',
        capacity: 32,
        type: 'phone',
        price: 800,
        image: '/xr.png',
    },
    {
        id: 3,
        name: 'iPhone 8 Pro',
        description: 'This is Iphone 8',
        capacity: 128,
        type: 'phone',
        price: 400,
        image: '/8.png',
    },
    {
        id: 4,
        name: 'iPhone X',
        description: 'This is Iphone X',
        capacity: 128,
        type: 'phone',
        price: 500,
        // image: '/x.png',
    },
    {
        id: 6,
        name: 'iPhone 7',
        // description: 'This is Iphone 7',
        capacity: 64,
        type: 'phone',
        price: 350,
        image: '/7.png',
    },

]
