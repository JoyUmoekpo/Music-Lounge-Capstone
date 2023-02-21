const {DataTypes} = require('sequelize');
const {sequelize} = require('../util/database');

module.exports = {
    Playlist : sequelize.define('playlist', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        privateStatus: DataTypes.BOOLEAN
    })
};