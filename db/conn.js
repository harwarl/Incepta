import { MongoClient } from "mongodb";
import "dotenv/config";

const connectionString = process.env.MONGO_URI || "";
const client = new MongoClient(connectionString);

let conn;

try {
  conn = await client.connect();
} catch (error) {
  console.error(error);
}

let db = conn.db("Incepta");

export default db;
