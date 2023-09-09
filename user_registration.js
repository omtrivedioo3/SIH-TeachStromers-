const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://Vasu:odYQZn2o9ZsYL2rd@cluster0.ppjsbe7.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const userName = "vasu";
const userPassword = "Vasu1234";
const userDep = "CE";
const userSub = "DNT";

async function run() {
  try {
    const databaseName = client.db("portal");
    const collectionName = databaseName.collection("users");

    const userObject = {
      uname: userName,
      password: userPassword,
      department: userDep,
      subject: userSub,
    };

    const result = await collectionName.insertOne(userObject);
    console.log(`A User was inserted with the _id: ${result.insertedId}`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
