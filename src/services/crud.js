import firestore from "../firestore";

class CRUD {
    static collection = null;

    static getCollection() {
        return firestore.collection(this.collection);
    }

    static cleanRecord(rawRecord) {
        return { id: rawRecord.id, ...rawRecord.data() };
    }

    static async all() {
        const data = await this.getCollection().get();
        return data.docs.map(this.cleanRecord);
    }

    static async get(id) {
        const data = await this.getCollection().doc(id).get();
        return this.cleanRecord(data);
    }

    static async delete(id) {
        await this.getCollection().doc(id).delete();
    }

    static async update(id, partial) {
        await this.getCollection().doc(id).update(partial);
    }

    static async create(data) {
        await this.getCollection().add(data);
    }
}

export class ProductsCrud extends CRUD {
    static collection = "products";
}

export class CartCrud extends CRUD {
    static collection = "cart";
    static cartId = "BahqwtxwTV1BwE4V9qZv";

    static async getCart() {
        return await this.get(this.cartId);
    }

    static async productsInCart() {
        const cart = await this.getCart();
        return cart.products;
    }

    static async addProductToCart(product) {
        const cart = await this.getCart();
        product.link = product.id;
        product.id = new Date().getTime();
        cart.products.push(product);
        await this.update(this.cartId, cart);
    }

    static async removeProductFromCart(id) {
        const cart = await this.getCart();
        cart.products = cart.products.filter((product) => product.id !== id);
        await this.update(this.cartId, cart);
    }

    static async cartCleanUp() {
        const cart = await this.getCart();
        // cart.products.count(product);
    }

    static async cartTotal() {
        const cart = await this.getCart();
        return cart.products.reduce((acc, item) => {
            return (acc += item.price);
        }, 0);
    }
}
