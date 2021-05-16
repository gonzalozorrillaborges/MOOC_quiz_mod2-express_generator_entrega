
const { Sequelize, Model, DataTypes } = require('sequelize');

const options = { logging: false};
const sequelize = new Sequelize("sqlite:quiz.sqlite", options);

class Quiz extends Model {}

Quiz.init(
  { question: {
      type: DataTypes.STRING,
      unique: { msg: "Quiz already exists"}
    },
    answer: DataTypes.STRING
  }, 
  { sequelize }
);


module.exports = sequelize;