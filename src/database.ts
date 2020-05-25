import {createPool} from 'mysql2';

export default class Database {
    private static instance: Database;
    private static connection:any;
    private static connected: boolean = false;

    constructor() {
        if(!Database.connected){
            Database.connected = true;
            this.initialize();
        }
        Database.instance = new Database();
    }

    private async initialize() {
        Database.connection = await createPool({
            host: 'localhost',
            user: 'admin',
            password: 'admin!1',
            database: process.env.DB_DATABASE,
            connectionLimit: 10
        })
    }

    public getAllPosts() {
        Database.connection.query("SELECT * FROM simple_posts.posts")
    }
}