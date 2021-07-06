import firestore from "../firestore";

export class CRUD {
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
