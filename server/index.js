require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { PORT } = process.env;
const { sequelize } = require("./util/database");
const { User } = require("./models/user");
const { register, login } = require("./controllers/auth");
const { isAuthenticated } = require("./middleware/isAuthenticated");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", register);
app.post("/login", login);

sequelize
	.sync({ force: true })
	.then(() => {
		app.listen(PORT, () =>
			console.log(
				`Connection successful. Server running on port ${PORT}`
			)
		);
	})
	.catch((err) => console.log(err));