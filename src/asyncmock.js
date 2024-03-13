const products = [
    {
        id: '1',
        name: 'Body',
        price: 10000,
        category: 'Ropa Nena',
        img: 'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png',
        stock: 20,
        description: 'Body manga corta, cuello americano. Color: Rosa'
    },
    {
        id: '2',
        name: 'Vestido',
        price: 9000,
        category: 'Ropa Nena',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803', stock: 16, description: 'Descripcion de Samsung s21',
        description: 'vestido mang corta con flores'
    },

    // {
    //     id: '3',
    //     name: 'Ajuar',
    //     price: 12000,
    //     category: 'Ropa Nene',
    //     img: 'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw', stock: 0, description: 'Descripcion de Ipad',
    //     description: 'Ajuar: gorro, batita y ranita. Color: Celeste'
    // },
    {
        id: '3',
        name: 'Ajuar',
        price: 12000,
        category: 'Ropa Nene',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803', stock: 16, description: 'Descripcion de Samsung s21',
        description: 'Ajuar: gorro, batita y ranita. Color: Celeste'
    },

    {
        id: '4',
        name: 'Body',
        price: 1000,
        category: 'Ropa Nene',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803', stock: 16, description: 'Descripcion de Samsung s21',
        description: 'Body manga corta con aplique de monito. Color: Negro'
    },

    {
        id: '5',
        name: 'Cambiador',
        price: 1000,
        category: 'Accesorios',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803', stock: 16, description: 'Descripcion de Samsung s21',
        description: 'Cambiador con amimalitos'
    },

    {
        id: '6',
        name: 'Toallon',
        price: 1200,
        category: 'Accesorios',
        img: 'https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803', stock: 16, description: 'Descripcion de Samsung s21',
        description: 'Toallon con babita'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}