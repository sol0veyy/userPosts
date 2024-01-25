const User = require("../models/models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, login, email) => {
    return jwt.sign(
        { id, login, email }, 
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async login(req, res) {
        const { login, password } = req.body;
    }

    async create(req, res) {
        const { login, email, password } = req.body;

        const is_user_login = await User.findOne({where: { login }});
        const is_user_email = await User.findOne({where: { email }});

        if (is_user_login) {
            return res.status(400).json({
                message: 'This login already use'
            });
        }

        if (is_user_email) {
            return res.status(400).json({
                message: 'This email already use'
            });
        }

        const hash_password = await bcrypt.hash(password, 10);

        const user = await User.create({ login, email, password: hash_password });
        const token = generateJwt(user.id, user.login, user.email);

        return res.json({ token });
    }
}

module.exports = new UserController();