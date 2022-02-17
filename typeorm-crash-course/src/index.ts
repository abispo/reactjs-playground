import { createConnection } from "typeorm"
import { Client } from "./entities/Client";
import { Banker } from "./entities/Banker";
import { Transaction } from "./entities/Transaction";

// typeorm-cli and reflect-metadata

const main = async () => {

    try {
        const connection = await createConnection({
            type: "postgres",
            host: "127.0.0.1",
            port: 5432,
            username: "postgres",
            password: "example",
            database: "typeorm",
            entities: [Client, Banker, Transaction],
            synchronize: true
        });
        console.log("Connected to database!")
    } catch (error) {
        console.error(error)
        throw new Error("Unable to connect do database")
    }
}

main()
