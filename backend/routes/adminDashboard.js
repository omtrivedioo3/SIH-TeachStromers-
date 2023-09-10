const modelAdmin = require("../mongo/adminDashboard");
const Dashboard = modelAdmin.AdminDashboard;



const Router = require("router");
const { mongo } = require("mongoose");
const router = Router();


let user;
let admin;



// Admin login request
router.post("/AdminDashboard", async (req, res) => {
    try {
        const { p_id, subject, PA_name, PR_name } = req.body;

        const AdminDashboard = new Dashboard({
            p_id, subject, PA_name, PR_name
        });
        const doc = await AdminDashboard.save();
        console.log(doc);
        return res.status(200).json({
            success:true,
            message:"entery created",
            doc
        })


    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
            message: "data cannot be fetch"
        })
    }


});


exports.router = router;