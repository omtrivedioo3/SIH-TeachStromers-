const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://Vasu:odYQZn2o9ZsYL2rd@cluster0.ppjsbe7.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const databaseName = client.db("portal");
    const collectionName = databaseName.collection("admin");

    const adminObject1 = {
      uname: "admin",
      password: "admin",
    };

    const result = await collectionName.insertOne(adminObject1);
    console.log(`A Admin was inserted with the _id: ${result.insertedId}`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
