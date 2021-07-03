import styles from "./Card.module.scss";

const Card = ({ product, onAddToCart, onRemoveFromCart, isInCart }) => {
    const handleCartAdd = (event) => {
        onAddToCart(product.id);
    };

    const handleCartRemove = (event) => {
        onRemoveFromCart(product.id);
    };

    return (
        <div className={styles.Card}>
            <h2>
                {product.name} ${product.price}
            </h2>
            {product.variants.map((variant) => (
                <p>{variant}</p>
            ))}

            {isInCart ? (
                <button onClick={handleCartRemove}>Remove from Cart</button>
            ) : (
                <button onClick={handleCartAdd}>Add to Cart</button>
            )}
        </div>
    );
};

export default Card;
