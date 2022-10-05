import { connect } from "mongoose";

export default async function connectMongo (URI: string) {
  console.log("Connecting to database...\n");
  return connect(URI)
    .then((db) => console.log(`\nMongodb connected to [${db.connection.db.databaseName}]`))
    .catch(error => console.error(error.message));
}
