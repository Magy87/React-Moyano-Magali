import React from 'react';
import bodyImage from './assets/ropa/body-m-corta.jpeg';
import VestidoImage from './assets/ropa/vestidito.jpeg';
import AjuarImage from './assets/ropa/ajuar-varon.jpeg';
import BodyneneImage from './assets/ropa/body-negro.jpeg';
import CambiadorImage from './assets/ropa/Cambiador.jpeg';
import toallonImage from './assets/ropa/Toallon.jpeg';

const products = [
    {
        id: '1',
        name: 'Body',
        price: 10000,
        category: 'Ropa Nena',
        img: bodyImage,
        stock: 15,
        description: 'Body manga corta, cuello americano. Color: Rosa'
    },
    {
        id: '2',
        name: 'Vestido',
        price: 9000,
        category: 'Ropa Nena',
        img: VestidoImage,
        stock: 16, 
        description: 'Vestido manga corta con flores'
    },
    {
        id: '3',
        name: 'Ajuar',
        price: 12000,
        category: 'Ropa Nene',
        img: AjuarImage, 
        stock: 12, 
        description: 'Ajuar: Gorro, batita y ranita. Color: Celeste'
    },
    {
        id: '4',
        name: 'Body',
        price: 10000,
        category: 'Ropa Nene',
        img: BodyneneImage, 
        stock: 10, 
        description: 'Body manga corta con aplique de monito. Color: Negro'
    },

    {
        id: '5',
        name: 'Cambiador',
        price: 10000,
        category: 'Accesorios',
        img: CambiadorImage, 
        stock: 8, 
        description: 'Cambiador con amimalitos'
    },
    {
        id: '6',
        name: 'Toallon',
        price: 15000,
        category: 'Accesorios',
        img: toallonImage, 
        stock: 13, 
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
        }, 800)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}