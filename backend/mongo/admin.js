const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Vasu:odYQZn2o9ZsYL2rd@cluster0.ppjsbe7.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
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

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: {
        type: String,
        minLength: 8,
        required: [true, "User password required"],
    },

});
exports.Admin = new mongoose.model("Admin", adminSchema);