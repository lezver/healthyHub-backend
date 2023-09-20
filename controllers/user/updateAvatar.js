const { wrapperError, httpError } = require("../../helpers");
const { User } = require("../../models/user");

const updateAvatar = async (req, res) => {
	const { _id } = req.user;

	const avatarURL = req.file.path;

	const updateAvatarUser = await User.findByIdAndUpdate(
		_id,
		{ avatarURL },
		{ new: true }
	);
	if (!updateAvatarUser) throw httpError(404, "Not found");

	return res.status(200).send({ avatarURL });
};

module.exports = { updateAvatar: wrapperError(updateAvatar) };
