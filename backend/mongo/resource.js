const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Vasu:odYQZn2o9ZsYL2rd@cluster0.ppjsbe7.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

var db = mongoose.connection;
try {
  db.on("error", console.error.bind(console, "Connecton error"));
  db.once("open", function () {
    console.log("mongoDB connected");
  });
} catch (err) {
  console.log(err);
}

const ResourceRepositorySchema = new mongoose.Schema({
  r_id: { type: String, require: true },
  subject: { type: String, required: true },
  r_name: { type: String, required: true },
  r_data: { type: String },
});
exports.ResourceRepository = new mongoose.model(
  "ResourceRepository",
  ResourceRepositorySchema
);
