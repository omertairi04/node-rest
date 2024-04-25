import { Sequelize, DataTypes } from "sequelize";

export const userModel = sequelize => {
  return sequelize.define("user", {
    user: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.TEXT,
    },
  });
};
