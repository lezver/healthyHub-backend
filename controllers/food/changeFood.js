const { wrapperError, httpError } = require("../../helpers");
// const { User } = require("../../models/user/index");
const { FoodIntake } = require("../../models/food/foodIntake");

const changeFood = async (req, res) => {
  const { fooId } = req.body;
  const checkFood = await FoodIntake.find({ fooId: fooId }).exec();
  if (!checkFood[0]) throw httpError(409, "User not found");
  return res.status(201).send(checkFood[0]);
};

module.exports = { changeFood: wrapperError(changeFood) };
