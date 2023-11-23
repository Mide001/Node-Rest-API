const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    create: (req, res, next) => {
        try {
            const user = await UserModel.create({
                name: req.body.name, 
                email: req.body.email,
                password: req.body.password,
            });

            res.json({ status: "success", message: "User added successfully", data: null});
        } catch (err) {
            next(err);
        }
    },


    authenticate: (req, res, next) => {
        try {
            const userInfo = await UserModel.findOne({ email: req.body.email });

            if (!userInfo) {
                return res.json({ status: "error", message: "user not found", data: null });
            }

            if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                const token = jwt.sign({ id: userInfo._id }, req.app.get("secretKey"), {
                    expiresIn: "1h",
                });
                res.json({ status: "success", message: "user found", data: { user: userInfo, token: token}})
            } else {
                res.json({ status: "error", message: "invalid email/password", data: null });
            }
        } catch (err) {
            next(err);
        }
    },
};