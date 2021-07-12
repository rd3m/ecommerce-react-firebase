import styles from "./Products.module.scss";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductsCrud } from "../../services/productsCrud";
import { CartCrud } from "../../services/cartCrud";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [variantChoice, setVariantChoice] = useState("1.00");
    const [qtyChoice, setQtyChoice] = useState(1);

    const getData = async () => {
        const data = await ProductsCrud.all();
        setProducts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleAddToCart = async (productToAdd) => {
        productToAdd.variants = variantChoice;
        productToAdd.qty = qtyChoice;
        await CartCrud.addProductToCart(productToAdd);
        getData();
    };

    const handleVariant = (e) => {
        setVariantChoice(e.target.value);
    };

    const handleQty = (e) => {
        const num = parseInt(e.target.value, 10);
        setQtyChoice(num);
    };

    return (
        <div className={styles.Grid}>
            {products.map((product) => (
                <div key={product.id} className={styles.Product}>
                    <Link to={`/products/${product.id}`}>
                        <img
                            className={styles.Products_img}
                            src={[product.img]}
                            alt="product"
                        />
                    </Link>
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                    <label for="variants">Magnification: </label>
                    <select
                        name="variants"
                        id="variants "
                        onChange={handleVariant}
                    >
                        {product.variants.map((variant) => (
                            <option value={variant}>{variant}</option>
                        ))}
                    </select>
                    <div>
                        <label for="qty">Qty: </label>
                        <input
                            type="number"
                            id="qty"
                            name="qty"
                            min="1"
                            max="10"
                            placeholder="1"
                            onChange={handleQty}
                        ></input>
                    </div>
                    <div>
                        <button onClick={() => handleAddToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
