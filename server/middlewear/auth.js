const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // let authHeader = req.headers.Authorization;
    const authHeader = req.headers['authorization']
    if (!authHeader) {
        return res.status(403).json({
            status: "failed",
            message: "token not found, Access Denied !"
        });
    }
    // console.log(authHeader)
    // let token = authHeader.split(' ')[1];
    const token = authHeader && authHeader.split(' ')[1]
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = verified;
    next();
}

module.exports = {
    verifyToken
};