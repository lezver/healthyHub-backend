const { httpError } = require("../helpers");

const validateBody = (schema) => (req, res, next) => {
	const { error } = schema.validate(req.body);

	if (error) throw httpError(400, error.message);

	next();
};

module.exports = validateBody;
