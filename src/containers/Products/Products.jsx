import styles from "./Products.module.scss";

import { useState, useEffect } from "react";
import { getProducts, addToCart } from "../../services/productsList";
import { Link } from "react-router-dom";
import { ProductsCrud, CartCrud } from "../../services/crud";

const Products = () => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const data = await ProductsCrud.all();
        setProducts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleAddToCart = async (product) => {
        await CartCrud.addProductToCart(product);
    };

    return (
        <div className={styles.Grid}>
            {products.map((product) => (
                <div key={product.id} className={styles.Product}>
                    <h2>{product.name}</h2>
                    <Link to={`/products/${product.id}`}>
                        Link to Product Page
                    </Link>
                    <p>${product.price}</p>
                    <button onClick={() => handleAddToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;
