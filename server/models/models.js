const Sequelize = require('sequelize')
const sequelize = require('../db');

const User = sequelize.define('User', {
    id: {type: Sequelize.STRING, primaryKey: true, autoIncrement: true},
    login: {type: Sequelize.STRING, unique: true},
    email: {type: Sequelize.STRING, unique: true},
    password: {type: Sequelize.STRING}
});

module.exports = User;
