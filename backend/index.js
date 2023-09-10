// require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const Router = require("./routes/user")
const RouterAdmin = require("./routes/admin")
const RouterAdminDashboard = require("./routes/adminDashboard")




const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use("/user", Router.router);
app.use("/admin", RouterAdmin.router);
app.use("/admin/Admin", RouterAdminDashboard.router);




app.listen(5000, () => {
    console.log("BE started at port 3000");
});
