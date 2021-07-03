import styles from "../../App.module.scss";

import { useState, useEffect } from "react";
import { getProducts, addToCart } from "../../services/productsList";
import Card from "../../components/Card";

const Products = () => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleAddToCart = async (id) => {
        await addToCart(id);
    };

    return (
        <>
            <div>
                <h1>Products</h1>
            </div>
            <div className={styles.App}>
                {products.map((product) => (
                    <Card
                        key={product.id}
                        onAddToCart={handleAddToCart}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
};

export default Products;
