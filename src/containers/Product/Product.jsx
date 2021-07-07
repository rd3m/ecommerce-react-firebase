import styles from "./Product.module.scss";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsCrud } from "../../services/productsCrud";
import { CartCrud } from "../../services/cartCrud";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            const data = await ProductsCrud.get(id);
            setProduct(data);
        };

        getData();
    }, []);

    const handleAddToCart = async (product) => {
        await CartCrud.addProductToCart(product);
    };

    return (
        <>
            {product ? (
                <div className={styles.product__page}>
                    <img src={[product.img]} alt="product image" />
                    <div>
                        <h3>{product.name}</h3>
                        <h3>${product.price}</h3>
                        <label for="variants">Magnification:</label>
                        <select name="variants" id="variants">
                            {product.variants.map((variant) => (
                                <option value={variant}>{variant}</option>
                            ))}
                        </select>
                        <p>Qty: {product.qty}</p>
                        <button onClick={() => handleAddToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ) : (
                <p>Product with id: {id} does not exist</p>
            )}
        </>
    );
};

export default Product;
