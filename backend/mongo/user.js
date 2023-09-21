const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Vasu:odYQZn2o9ZsYL2rd@cluster0.ppjsbe7.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
// console.log(process.env.DATABASE_PASS);

var db = mongoose.connection;
try {
  db.on("error", console.error.bind(console, "Connecton error"));
  db.once("open", function () {
    console.log("mongoDB connected");
  });
} catch (err) {
  console.log(err);
}

const userSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {
    type: String,
    minLength: 6,
    required: true,
  },
  university: { type: String, required: true },
  institute: { type: String, required: true },
  department: { type: String, required: true },
  subject: { type: String, required: true },
  p_assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
  p_review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
});
exports.User = new mongoose.model("User", userSchema);
