import styles from "../Cart/Cart.module.scss";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartCrud } from "../../services/cartCrud";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState();

    const getData = async () => {
        const data = await CartCrud.productsInCart();
        const totalPrice = await CartCrud.cartTotal();
        setCart(data);
        setCartTotal(totalPrice);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleRemoveFromCart = async (id) => {
        await CartCrud.removeProductFromCart(id);
        getData();
    };

    return (
        <div className={styles.Cart_page}>
            <div className={styles.Cart_headings}>
                <h1>Cart</h1>
                <h3>Total: ${cartTotal}</h3>
            </div>
            <div className={styles.Cart}>
                {cart.map((product) => (
                    <div key={product.id} className={styles.Cart}>
                        <img src={[product.img]} alt="product image" />
                        <div>
                            <h2>{product.name}</h2>
                            <p>${product.price}</p>
                            <p>Qty: {product.qty}</p>
                            <p>Magnification: {product.variants}</p>
                            <button
                                onClick={() => handleRemoveFromCart(product.id)}
                            >
                                Remove from Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
