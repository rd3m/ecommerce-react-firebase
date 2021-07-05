import firestore from "../firestore.js";

const products = [
    { name: "tshirts", price: 11, variants: ["red", "blue", "green"] },
    { name: "book", price: 8, variants: ["harry potter", "the hobbit"] },
    { name: "socks", price: 4, variants: ["black", "white"] },
    { name: "shoes", price: 12, variants: ["left", "right"] },
];

const seedProducts = async () => {
    const col = firestore.collection("products");

    const data = await col.get();

    if (data.size > 0) {
        return;
    }

    const promises = products.map(async (product) => {
        return await col.add(product);
    });

    const resolvedReferences = await Promise.all(promises);
};

export const getProducts = async () => {
    await seedProducts();
    const col = firestore.collection("products");
    const queryData = await col.get();
    const documents = queryData.docs;

    return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getCart = async () => {
    const col = firestore.collection("cart");
    const queryData = await col.get();
    const documents = queryData.docs;
    return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const deleteProduct = async (id) => {
    const col = firestore.collection("products").doc(id);
    await col.delete();
};

export const removeFromCart = async (id) => {
    const col = firestore.collection("cart").doc(id);
    await col.delete();
};

export const updateProducts = async (id, record) => {
    const ref = firestore.collection("products").doc(id);
    await ref.update(record);
};

export const createProduct = async (record) => {
    const col = firestore.collection("products");
    await col.add(record);
};

export const addToCart = async (id) => {
    const doc = firestore.collection("products").doc(id);
    const product = await doc.get();
    const cart = firestore.collection("cart").doc("oXVSox3YD3l3k8xgXKnM");
    console.log(cart.data());
    await cart.products.push(product.data());
};

export const getProduct = async (id) => {
    const col = firestore.collection("products");
    const ref = col.doc(id);
    const doc = await ref.get();

    if (!doc.exists) {
        return;
    }

    return { id: doc.id, ...doc.data() };
};
