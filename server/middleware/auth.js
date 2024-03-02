const jwt = require("jsonwebtoken");

exports.isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({
                message: "Please log in"
            });
        }

        jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    message: "Invalid Token"
                });
            }

            req.body.userId = decode.userId;
            // Continue to the next middleware or route handler
            next();
        });

    } catch (error) {
        res.status(400).json({
            message: "Something went wrong"
        });
    }
};
