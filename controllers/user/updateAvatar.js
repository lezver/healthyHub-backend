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

	return res.status(200).send({ avatarURL: updateAvatarUser.avatarURL });
};

module.exports = { updateAvatar: wrapperError(updateAvatar) };
