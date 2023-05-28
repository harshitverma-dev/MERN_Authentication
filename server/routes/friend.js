const express = require('express');
const { getAllFriends, getSingleFriend, postFriend, deleteFriend, updateFriend } = require('../controllers/friendController');
const route = express.Router();

// get all friends
route.get('/', getAllFriends);

// get single friend
route.get('/:id', getSingleFriend)

// post friends
route.post('/', postFriend)

// delete friend
route.delete('/:id', deleteFriend);

// update friend
route.patch('/:id', updateFriend)


module.exports = route;