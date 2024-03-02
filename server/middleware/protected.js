const jwt = require("jsonwebtoken");

exports.protected = (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({
                message: "Please provide a token"
            });
        }

        jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    message: "Invalid Token"
                });
            }

            // Check if the role is "admin"
            if (decode.role !== "admin") {
                return res.status(403).json({
                    message: "Unauthorized. Only admins are allowed."
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
