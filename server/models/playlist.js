const {DataTypes} = require('sequelize');
const {sequelize} = require('../util/database');
// const { User } = ("./user.js")


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
    })
};


// module.exports = {
//     Playlist: sequelize.define('playlist', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             allowNull: false,
//             primaryKey: true
//         },
//         title: DataTypes.STRING,
//         content: DataTypes.ARRAY,
//         user_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: User,
//                 key: 'id'
//             }
//         }
//     })
// };
