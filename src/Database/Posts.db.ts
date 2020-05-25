import Database from "./Database";

export default class Posts extends Database {

    private constructor() {
        super();
    }

    public static isConnected(): boolean {
        return super.isConnected();
    }

    public static async getAllPosts() {

        try {
            return await super.connection.execute('SELECT * FROM posts');
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
}