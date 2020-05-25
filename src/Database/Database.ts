import {createConnection} from 'mysql2';

export default class Database {
    protected static connection = createConnection({
        user: "admin",
        host: "localhost",
        password: "admin!1",
        database: "simple_posts"
    });

    protected constructor() {}

    public static isConnected(): boolean {
        return this.connection != null;
    }
}