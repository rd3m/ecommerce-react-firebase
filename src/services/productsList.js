import firestore from "../firestore.js";

const products = [
    {
        name: "reading glasses dorotea",
        price: 45,
        img:
            "https://cdn.shopify.com/s/files/1/0554/9749/0639/products/dorotea_400x.jpg?v=1622523565",
        variants: ["1.00", "1.50", "2.00", "2.50", "3.00"],
        qty: 1,
    },
    {
        name: "reading glasses herta",
        price: 45,
        img:
            "https://cdn.shopify.com/s/files/1/0554/9749/0639/products/herta_400x.jpg?v=1622528976",
        variants: ["1.00", "1.50", "2.00", "2.50", "3.00"],
        qty: 1,
    },
    {
        name: "reading glasses fia",
        price: 45,
        img:
            "https://cdn.shopify.com/s/files/1/0554/9749/0639/products/fia_400x.jpg?v=1622523853",
        variants: ["1.00", "1.50", "2.00", "2.50", "3.00"],
        qty: 1,
    },
    {
        name: "reading glasses yrsa",
        price: 45,
        img:
            "https://cdn.shopify.com/s/files/1/0554/9749/0639/products/yrsa_front_1383x922_7d5c58ed-07cd-47e4-9664-39376e0000a2_400x.jpg?v=1617083681",
        variants: ["1.00", "1.50", "2.00", "2.50", "3.00"],
        qty: 1,
    },
    {
        name: "reading glasses kajsa",
        price: 45,
        img:
            "https://cdn.shopify.com/s/files/1/0554/9749/0639/products/kajs_400x.jpg?v=1622607896",
        variants: ["1.00", "1.50", "2.00", "2.50", "3.00"],
        qty: 1,
    },
    {
        name: "reading glasses dante",
        price: 45,
        img:
            "https://cdn.shopify.com/s/files/1/0554/9749/0639/products/dante_400x.jpg?v=1622523401",
        variants: ["1.00", "1.50", "2.00", "2.50", "3.00"],
        qty: 1,
    },
    {
        name: "sunglasses raoul",
        price: 59,
        img:
            "https://cdn.shopify.com/s/files/1/0554/9749/0639/products/01_raoul_sunglasses_400x.jpg?v=1617083931",
        variants: ["1.00", "1.50", "2.00", "2.50", "3.00"],
        qty: 1,
    },
    {
        name: "reading glasses dylan",
        price: 45,
        img:
            "https://cdn.shopify.com/s/files/1/0554/9749/0639/products/dylan_400x.jpg?v=1622523634",
        variants: ["1.00", "1.50", "2.00", "2.50", "3.00"],
        qty: 1,
    },
    {
        name: "reading glasses marina",
        price: 45,
        img:
            "https://cdn.shopify.com/s/files/1/0554/9749/0639/products/marina_400x.jpg?v=1622612595",
        variants: ["1.00", "1.50", "2.00", "2.50", "3.00"],
        qty: 1,
    },
    {
        name: "reading glasses naomi",
        price: 45,
        img:
            "https://cdn.shopify.com/s/files/1/0554/9749/0639/products/naomi_a8e49912-0786-42d2-bb63-324ad5c9ec33_400x.jpg?v=1622612906",
        variants: ["1.00", "1.50", "2.00", "2.50", "3.00"],
        qty: 1,
    },
    {
        name: "reading glasses svante",
        price: 45,
        img:
            "https://cdn.shopify.com/s/files/1/0554/9749/0639/products/svante_front_1383x922_290610c7-3d03-4ddf-bd9a-2fb6e1a238d9_400x.jpg?v=1617083871",
        variants: ["1.00", "1.50", "2.00", "2.50", "3.00"],
        qty: 1,
    },
    {
        name: "reading glasses kim",
        price: 45,
        img:
            "https://cdn.shopify.com/s/files/1/0554/9749/0639/products/kim_400x.jpg?v=1622607993",
        variants: ["1.00", "1.50", "2.00", "2.50", "3.00"],
        qty: 1,
    },
];

// export const seedProducts = async () => {
//     const col = firestore.collection("products");

//     const data = await col.get();

//     if (data.size > 0) {
//         return;
//     }

//     const promises = products.map(async (product) => {
//         return await col.add(product);
//     });

//     const resolvedReferences = await Promise.all(promises);
// };

export const getProducts = async () => {
    // await seedProducts();
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
