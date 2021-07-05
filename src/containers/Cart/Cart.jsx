import styles from "../Products/Products.module.scss";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartCrud } from "../../services/crud";

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
        console.log(id);
        await CartCrud.removeProductFromCart(id);
        getData();
    };

    return (
        <>
            <div>
                <h1>Cart</h1>
                <h3>Total: {cartTotal}</h3>
            </div>
            <div className={styles.Grid}>
                {cart.map((product) => (
                    <div key={product.id} className={styles.Product}>
                        <h2>{product.name}</h2>
                        <Link to={`/products/${product.link}`}>
                            Link to Product Page
                        </Link>
                        <p>${product.price}</p>
                        <button
                            onClick={() => handleRemoveFromCart(product.id)}
                        >
                            Remove from Cart
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cart;
