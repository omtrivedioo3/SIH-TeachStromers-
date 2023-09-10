const modelAdmin = require("../mongo/admin");
const Admin = modelAdmin.Admin;


const express = require("express");
const Router = require("router");
const { mongo } = require("mongoose");
const router = Router();


let user;
let admin;



// Admin login request
router.post("/Admin", async (req, res) => {
    let success = false;
    const { name, password } = req.body;
    admin = await Admin.findOne({ name: name });
    console.log(admin)
    console.log(name)
    console.log(password)

    if (!name || !password) {
        success = false;
        res.send({ message: "Please enter valid data" });
    } else {
        if (admin) {
            success = true;
            if (admin.password === password) {
                res.send({ message: "Login Successfull", admin: admin, success: success });
            } else {
                success = false;
                res.send({
                    message: "Password didn't match",
                });
                // res.sendStatus(401);
            }
        } else {
            success = false;
            res.send({ message: "Admin not found" });
        }
    }
});


exports.router = router;