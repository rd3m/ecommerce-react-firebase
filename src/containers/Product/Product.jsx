import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsCrud } from "../../services/crud";

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

    return (
        <>
            {product ? (
                <div>
                    <h1>
                        {product.name} {product.price}
                    </h1>
                </div>
            ) : (
                <p>Product with id: {id} does not exist</p>
            )}
        </>
    );
};

export default Product;
