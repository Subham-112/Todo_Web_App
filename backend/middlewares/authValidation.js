const { successMsg, errorMsg } = require('../../frontend/src/utils');
const joi = require('joi');

const jwt = require('jsonwebtoken');

const signupValidation = (req, res, next) => {
    const Schema = joi.object({
        name: joi.string().min(3).max(30).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(30).required()
    })

    const { error } = Schema.validate(req.body);
    if(error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }

    next();
}

const loginValidation = (req, res, next) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(30).required()
    })

    const { error } = Schema.validate(req.body);
    if(error) {
        return res.status(400)
            .json({ message: "Bad request", error })
    }

    next();
}

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) {
        return res.status(401)
            .json({ message: "Unauthorized" })
    }

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (err) {
        return res.status(403)
            .json({ message: 'Invalid token' })
    }
}

module.exports = {
    signupValidation,
    loginValidation,
    verifyToken
}