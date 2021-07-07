import { CRUD } from "./crud";
import { countDupesArray, removeDupesArray } from "./utils";

export class CartCrud extends CRUD {
    static collection = "cart";
    static cartId = "BahqwtxwTV1BwE4V9qZv";

    static async getCart() {
        return await this.get(this.cartId);
    }

    static async productsInCart() {
        const cart = await this.getCart();
        // const cartIds = [];
        // for (let i = 0; i < cart.products.length; ++i) {
        //     cartIds.push(Object.values(cart.products)[i].id);
        // }
        // const countObj = countDupesArray(cartIds);
        // cart.products.map((item) => (item.qty = countObj[item.id]));
        // cart.products = removeDupesArray(cart.products);
        return cart.products;
    }

    static async addProductToCart(product) {
        const cart = await this.getCart();
        product.link = product.id;
        cart.products.push(product);
        await this.update(this.cartId, cart);
    }

    static async removeProductFromCart(id) {
        const cart = await this.getCart();
        cart.products = cart.products.filter((product) => product.id !== id);
        await this.update(this.cartId, { products: cart.products });
    }

    static async cartTotal() {
        const cart = await this.getCart();
        return cart.products.reduce((acc, item) => {
            return acc + item.price * item.qty;
        }, 0);
    }

    // static async cartCleanUp() {
    //     const cart = { id: this.cartId, ...this.productsInCart() };
    //     await this.update(this.cartId, cart);
    // }
}
