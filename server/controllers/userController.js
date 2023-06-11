const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

// signup
const userSignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        // console.log(name, email, password)
        if (name && email && password) {
            const userCheck = await User.findOne({ email: email });
            // console.log(userCheck)
            if (!userCheck) {
                const userData = new User({
                    name,
                    email,
                    password: hashedPassword
                })

                const saveData = await userData.save()
                return res.status(200).json({
                    message: "success",
                    saveData
                })
            }
            return res.status(400).json({
                status: "failed",
                message: "user already exist!"
            })
        } else {
            return res.status(400).json({
                status: "failed",
                "message": "fill all fields"
            })
        }
    } catch (err) {
        res.status(400).json({
            status: "failed",
            error: err
        })
    }
}

// login
const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                status: "failed",
                message: "user doesn't exist !"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                status: "failed",
                message: "invalid credentials !"
            })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
        // removing password field
        const modifiedUser = await User.findById(user._id).select('-password');
        // console.log('yes its working')
        // console.log(modifiedUser)
        res.status(200).json({
            status: "success",
            token: token,
            modifiedUser
        })

    } catch (err) {
        res.status(400).json({
            status: "failed",
            error: err
        })
    }
}

module.exports = {
    userLogin,
    userSignUp
}
