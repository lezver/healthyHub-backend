const multer = require("multer");
const path = require("node:path");

const tmpDir = path.join(__dirname, "..", "tmp");

const multerConfig = multer.diskStorage({
	distination: tmpDir,
	filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({
	storage: multerConfig,
});

module.exports = upload;
