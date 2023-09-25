const Day = require("../../schemas/day");

const createDaysForCurrentYear = async (req, body) => {
	const userId = req.user.id;

	const currentDate = new Date();

	const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
	// const endOfYear = new Date(currentDate.getFullYear(), 11, 31, 23, 59, 59, 999);
	const yesterday = new Date(currentDate);
	yesterday.setDate(currentDate.getDate() - 1);

	const existingDays = await Day.find({
		ownerId: userId,
		date: { $gte: startOfYear, $lte: yesterday },
	});

	const daysCreated = existingDays.length;

	const daysToCreate = 365 - daysCreated;

	for (let i = 0; i < daysToCreate; i++) {
		const newDate = new Date(startOfYear);
		newDate.setDate(newDate.getDate() + daysCreated + i);

		const newDay = await Day.create({
			...body,
			ownerId: userId,
			date: newDate,
		});
		// next (newDay);
	}

	return "Дні для поточного року були створені успішно.";
};

module.exports = createDaysForCurrentYear;
