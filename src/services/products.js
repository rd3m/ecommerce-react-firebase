import firestore from "../firestore.js";

const products = [
    { name: "tshirts", price: 11, variants: ["red", "blue", "green"] },
    { name: "book", price: 8, variants: ["harry potter", "the hobbit"] },
    { name: "socks", price: 4, variants: ["black", "white"] },
    { name: "shoes", price: 12, variants: ["left", "right"] },
];

// C in CRUD
const seedProducts = async () => {
    const col = firestore.collection("products");

    const data = await col.get();

    if (data.size > 0) {
        return;
    }

    // Array<Promise>
    const promises = products.map(async (product) => {
        return await col.add(product);
    });

    const resolvedReferences = await Promise.all(promises);
};

// R in CRUD
export const getProducts = async () => {
    await seedProducts();

    // Firestore.collection
    // - https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore#collection
    // returns CollectionReference:
    // - https://firebase.google.com/docs/reference/js/firebase.firestore.CollectionReference
    const col = firestore.collection("products");

    // CollectionReference.get => Promise<QuerySnapshot>
    const queryData = await col.get();

    // QuerySnapshot.docs => Array<QueryDocumentSnapshot>
    const documents = queryData.docs;

    return documents.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// D in CRUD
export const deleteProduct = async (id) => {
    // DocumentReference
    const col = firestore.collection("products").doc(id);
    // DocumentReference.delete
    await col.delete();
};

// // U in CRUD
// export const updateColleagues = async (id, record) => {
//     const ref = firestore.collection("colleagues").doc(id);
//     await ref.update(record);
// };

// export const createColleague = async (record) => {
//     const col = firestore.collection("colleagues");
//     await col.add(record);
// };
