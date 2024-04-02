import React, { useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Checkout.css';



const Checkout = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const createOrder = () => {
        const objOrder = {
            buyer: userData,
            items: [],
            total: 0
        };
        console.log('Orden generada:', objOrder);
    };

    return (
        <div className="form-container">
            <h1>Checkout</h1>
            <form>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Correo electrónico:</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Teléfono:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Dirección:</label>
                    <input
                        type="text"
                        name="address"
                        value={userData.address}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="submit-button" type="button" onClick={createOrder}>
                    Generar orden de compra
                </button>
            </form>
        </div>
    );
};

export default Checkout;
