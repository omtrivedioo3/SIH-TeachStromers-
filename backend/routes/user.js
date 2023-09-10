const modelUser = require("../mongo/user");
const User = modelUser.User;
const express = require("express");
const Router = require("router");
const { mongo } = require("mongoose");
const router = Router();


let user;
let admin;
// user login request
router.post("/User", async (req, res) => {
    let success = false;
    const { email, password } = req.body;
    user = await User.findOne({ email: email });
    console.log(user)
    console.log(email)
    console.log(password)

    if (!email || !password) {
        success = false;
        res.send({ message: "Please enter valid data" });
    } else {
        if (user) {
            success = true;
            if (user.password === password) {
                res.send({ message: "Login Successfull", user: user, success: success });
            } else {
                success = false;
                res.send({
                    message: "Password didn't match",
                });
                // res.sendStatus(401);
            }
        } else {
            success = false;
            res.send({ message: "User not Register." });
        }
    }
});


// User  request
router.post("/UserRegister", async (req, res) => {
    try {
        const { name, email, password, department, subject } = req.body;

        const UserDetail = new User({
            name, email, password, department, subject
        });
        const doc = await UserDetail.save();
        console.log(doc);
        return res.status(200).json({
            success: true,
            message: "entery created",
            doc: doc
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
});


exports.router = router;