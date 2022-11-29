const { db, DataTypes } = require('../utils/database.util');

const User = db.define('user', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	phone: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	state: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	service: {
		type: DataTypes.STRING,
		defaultValue: 'normal',
		allowNull: false,
	},
	message: {
		type: DataTypes.STRING,
		defaultValue: 'No message',
		allowNull: true,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { User };
