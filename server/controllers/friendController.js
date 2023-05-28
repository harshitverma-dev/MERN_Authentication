const { default: mongoose } = require('mongoose');
const Friend = require('../models/friendModel');

const getAllFriends = async (req, res) => {
    try {
        const allFriends = await Friend.find().sort({ createdAt: -1 });
        if (!allFriends) {
            return res.status(404).json({
                status: "failed",
                message: "friends are not avaliable"
            })
        }
        res.status(200).json({
            status: "success",
            allFriends
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            err
        })
    }
}

const getSingleFriend = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                status: "failed",
                message: "id is not vaild"
            })
        }
        const friendFind = await Friend.findById(id);
        if (!friendFind) {
            return res.status(404).json({
                status: "failed",
                message: "friend does not exist"
            })
        }
        res.status(200).json({
            status: "success",
            friendFind
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            err
        })
    }
}

const postFriend = async (req, res) => {
    try {
        const { firstName, lastName, friendEmail, jobRole, location } = req.body;
        if (!firstName || !lastName || !friendEmail || !jobRole || !location) {
            return res.status(404).json({
                status: "failed",
                message: "fill all fields !"
            })
        }
        const checkfriend = await Friend.findOne({ friendEmail: friendEmail });
        if (checkfriend) {
            return res.status(404).json({
                status: "failed",
                message: "this friend's email is exsist already"
            })
        }
        const saveFriend = await new Friend({
            firstName, lastName, friendEmail, jobRole, location
        })
        const storeFriend = await saveFriend.save();
        res.status(200).json({
            status: "sucess",
            message: "friend saved in DB"
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            err
        })
    }
}

const updateFriend = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                status: "failed",
                message: "id is not vaild"
            })
        }

        const updatedFriend = await Friend.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
        if (!updateFriend) {
            return res.status(404).json({
                status: "failed",
                message: "no friend is avaliable"
            })
        }
        res.status(200).json({
            status: "success",
            updatedFriend
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            err
        })
    }
}
const deleteFriend = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                status: "failed",
                message: "id is not vaild"
            })
        }
        const deleteFriend = await Friend.findOneAndDelete({ _id: id });
        if (!deleteFriend) {
            return res.status(404).json({
                status: "failed",
                message: "no friend found !"
            })
        }
        res.status(200).json({
            status: "success",
            deleteFriend
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            err
        })
    }
}

module.exports = {
    getAllFriends,
    getSingleFriend,
    postFriend,
    updateFriend,
    deleteFriend
}