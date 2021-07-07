import styles from "./Product.module.scss";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsCrud } from "../../services/productsCrud";
import { CartCrud } from "../../services/cartCrud";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(undefined);
    const [variantChoice, setVariantChoice] = useState("1.00");
    const [qtyChoice, setQtyChoice] = useState(1);

    useEffect(() => {
        const getData = async () => {
            const data = await ProductsCrud.get(id);
            setProduct(data);
        };

        getData();
    }, []);

    const handleAddToCart = async (productToAdd) => {
        productToAdd.variants = variantChoice;
        productToAdd.qty = qtyChoice;
        await CartCrud.addProductToCart(productToAdd);
    };

    const handleVariant = (e) => {
        setVariantChoice(e.target.value);
    };

    const handleQty = (e) => {
        setQtyChoice(e.target.value);
    };

    return (
        <>
            {product ? (
                <div className={styles.product__page}>
                    <img src={[product.img]} alt="product image" />
                    <div>
                        <h3>{product.name}</h3>
                        <h3>${product.price}</h3>
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
                            <label for="qty">Qty:</label>
                            <input
                                type="number"
                                id="qty"
                                name="qty"
                                min="0"
                                max="10"
                                onChange={handleQty}
                            ></input>
                        </div>

                        <div>
                            <button onClick={() => handleAddToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    {/* <div className={styles.notification}>
                        <h3>Product added to cart!</h3>
                    </div> */}
                </div>
            ) : (
                <p>Product with id: {id} does not exist</p>
            )}
        </>
    );
};

export default Product;
