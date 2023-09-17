const { User, FoodIntake } = require("../../models");
const { wrapperError, httpError } = require("../../helpers");

const statisticsLastMonth = async (req, res) => {
	const { id } = req.body;
	const currentDate = new Date();
	const lastMonthStartDate = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth() - 1,
		1
	);
	const lastMonthEndDate = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		0
	);
	//   const checkUser = await User.find({ _id: id }).exec();
	try {
		let lastMonthDiary = await FoodIntake.aggregate([
			{
				$match: {
					// name: "Fish",
					ownerId: id,
					createdAt: {
						$gte: lastMonthStartDate,
						$lte: lastMonthEndDate,
					},
				},
			},

			// }}
			//   {
			//     $group: {
			//       _id: "$date",
			//       amount: { $sum: "$amount" },
			//     },
			//   },
		]);

		res.status(200).send(lastMonthDiary);
	} catch {
		(err) => console.log(err);
	}
};

module.exports = { statisticsLastMonth: wrapperError(statisticsLastMonth) };
