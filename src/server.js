import { Sequelize } from "sequelize";
import { config } from "dotenv";
config();

import { userModel } from "./models/user";

export const connection = async () => {
  const sequelize = new Sequelize(
    process.env.SERVER,
    process.env.ADMIN,
    process.env.PASSWORD,
    {
      host: "localhost",
      dialect: "postgres",
    },
  );
  let User = null;
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    User = userModel(sequelize);
    await sequelize.sync();
    console.log("Table has been created  successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
