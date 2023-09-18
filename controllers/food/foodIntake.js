const { wrapperError, httpError } = require("../../helpers");
const { User } = require("../../models/user/index");
const { FoodIntake } = require("../../models/food/foodIntake");

const foodIntake = async (req, res) => {
  const { title, ownerId, details } = req.body;
  const checkUser = await User.find({ _id: ownerId }).exec();
  if (!checkUser[0]) throw httpError(409, "User not found");
  details.map(
    async ({
      name,
      carbonohidrates,
      protein,
      fat,
      calories,
      foodId,
      meals,
    }) => {
      await FoodIntake.create({
        title,
        ownerId,
        name,
        carbonohidrates,
        protein,
        fat,
        calories,
        foodId,
        meals,
      });
    }
  );

  return res.status(201).send("Food added to DB");
};

module.exports = { foodIntake: wrapperError(foodIntake) };
