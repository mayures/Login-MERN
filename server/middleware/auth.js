const jwt = require("jsonwebtoken");


function auth(req, res, next) {    
    try {
        const token = req.cookies.token;
        if (!token)
            return res.status(401).json({ errorMessage: "unauthorised" });

        const verified = jwt.verify(token, process.env.JWT_SECRET);

        req.user = verified.user;

        next();

    } catch (err) {
        console.error(err);
        res.status(401).json({ errorMessage: "unauthorised" });
    }
}

module.exports = auth;