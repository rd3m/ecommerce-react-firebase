import styles from "../../App.module.scss";

import { useState, useEffect } from "react";
import {
    getProducts,
    deleteProduct,
    // updateColleagues,
    // createColleague,
} from "../../services/products";
import Card from "../../components/Card";
// import CreateCard from "./components/CreateCard";

const CardGrid = () => {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleDelete = async (id) => {
        await deleteProduct(id);
        getData();
    };

    // const handleChange = async (updatedRecord) => {
    //     const { id, ...record } = updatedRecord;
    //     await updateColleagues(id, record);
    //     getData();
    // };

    // const handleCreate = async (newRecord) => {
    //     await createColleague(newRecord);
    //     getData();
    // };

    return (
        <div className={styles.App}>
            {products.map((product) => (
                <Card
                    key={product.id}
                    onDelete={handleDelete}
                    // onChange={handleChange}
                    product={product}
                />
            ))}
            {/* <CreateCard onSubmit={handleCreate} /> */}
        </div>
    );
};

export default CardGrid;
