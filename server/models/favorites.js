const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

module.exports = {
	Favorites: sequelize.define("favorites", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		song_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		
	}),
};