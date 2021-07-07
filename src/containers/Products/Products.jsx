import styles from "./Products.module.scss";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductsCrud } from "../../services/productsCrud";

const Products = () => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const data = await ProductsCrud.all();
        setProducts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles.Grid}>
            {products.map((product) => (
                <div key={product.id} className={styles.Product}>
                    <Link to={`/products/${product.id}`}>
                        <img
                            className={styles.Products_img}
                            src={[product.img]}
                            alt="product image"
                        />
                    </Link>
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Products;
