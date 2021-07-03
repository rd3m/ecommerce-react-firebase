import styles from "../../App.module.scss";

import { useState, useEffect } from "react";
import { getCart, removeFromCart } from "../../services/productsList";
import Card from "../../components/Card";

const Cart = () => {
    const [cart, setCart] = useState([]);

    const getData = async () => {
        const data = await getCart();
        setCart(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleRemoveFromCart = async (id) => {
        await removeFromCart(id);
        getData();
    };

    return (
        <>
            <div>
                <h1>Cart</h1>
            </div>
            <div className={styles.App}>
                {cart.map((product) => (
                    <Card
                        key={product.id}
                        onRemoveFromCart={handleRemoveFromCart}
                        product={product}
                        isInCart={true}
                    />
                ))}
            </div>
        </>
    );
};

export default Cart;
