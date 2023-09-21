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

const AdminDashboardSchema = new mongoose.Schema({
  p_id: { type: String, require: true },
  subject: { type: String, required: true },
  PA_name: { type: String, required: true },
  PR_name: { type: String, required: true },
  PA_status: { type: Boolean, default: false },
  PR_status: { type: Boolean, default: false },
  PA_data: { type: String },
  PR_data: { type: String },
  admin_status: { type: Boolean, default: false },
});
exports.AdminDashboard = new mongoose.model(
  "AdminDashboard",
  AdminDashboardSchema
);
