const express = require('express');
const { getAllFriends, getSingleFriend, postFriend, deleteFriend, updateFriend } = require('../controllers/friendController');
const { verifyToken } = require('../middlewear/auth');
const route = express.Router();


// get all friends
route.get('/', verifyToken, getAllFriends);

// get single friend
route.get('/:id', verifyToken,  getSingleFriend)

// post friends
route.post('/', verifyToken,  postFriend)

// delete friend
route.delete('/:id', verifyToken,  deleteFriend);

// update friend
route.patch('/:id', verifyToken,  updateFriend)


module.exports = route;