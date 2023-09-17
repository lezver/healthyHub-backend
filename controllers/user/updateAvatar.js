const { wrapperError, httpError } = require("../../helpers");
const { rename } = require("node:fs/promises");
const path = require("node:path");
const { User } = require("../../models");

const avatarDir = path.join(__dirname, "..", "..", "public", "avatars");

const updateAvatar = async (req, res) => {
	const { path: tmpUpload, originalname } = req.file;
	const { _id } = req.user;

	const newFileName = `${_id}_${originalname}`;

	const resultUpload = path.join(avatarDir, newFileName);

	await rename(tmpUpload, resultUpload);

	const avatarURL = path.join("avatars", newFileName);

	const updateAvatarUser = await User.findByIdAndUpdate(
		_id,
		{ avatarURL },
		{ new: true }
	);

	return !updateAvatarUser
		? httpError(404, "Not found")
		: res.status(201).send(updateAvatarUser);
};

module.exports = { updateAvatar: wrapperError(updateAvatar) };
