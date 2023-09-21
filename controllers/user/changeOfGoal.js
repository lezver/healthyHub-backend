const { wrapperError, httpError } = require("../../helpers");
const { User } = require("../../models/user");

const changeOfGoal = async (req, res) => {
  const { _id } = req.user;
  const { goal } = req.body;

  const changeUserGoal = await User.findByIdAndUpdate(
    _id,
    { goal },
    { new: true }
  ).exec();

  return res.status(200).send({ goal: changeUserGoal.goal });
};

module.exports = { changeOfGoal: wrapperError(changeOfGoal) };
