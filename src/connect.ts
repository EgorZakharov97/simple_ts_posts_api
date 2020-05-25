import {createPool} from 'mysql2/promise';

export async function connect() {
    const conn = createPool({
        user: "admin",
        host: "localhost",
        password: "admin!1",
        database: "simple_posts",
        connectionLimit: 10,
    });
    return conn;
}