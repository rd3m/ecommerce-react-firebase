import { useEffect, useState } from "react";
import styles from "./Card.module.scss";

// import Counter from "../Counter";

const Card = ({ product, onDelete, onChange }) => {
    // const [browniePoints, setBrowniePoint] = useState(colleague.brownies || 0);

    // useEffect(() => {
    //     onChange({
    //         ...colleague,
    //         brownies: browniePoints,
    //     });
    // }, [browniePoints]);

    const handleDelete = (event) => {
        onDelete(product.id);
    };

    return (
        <div className={styles.Card}>
            <h2>
                {product.name} ${product.price}
            </h2>

            {product.variants.map((variant) => (
                <p>{variant}</p>
            ))}
            {/* <p>{product.variants[0]}</p> */}
            {/* <p>Age: {colleague.age}</p> */}
            <button onClick={handleDelete}>Delete</button>
            {/* <div>
                Brownie Points:{" "}
                <Counter value={browniePoints} onChange={setBrowniePoint} />
            </div> */}
        </div>
    );
};

export default Card;
