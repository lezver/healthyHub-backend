const jwt = require("jsonwebtoken");
const { httpError } = require("../helpers");
const { User } = require("../models/user");
const { SECRET_KEY } = process.env;

const noProvide = "No authorized";

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;

  const [bearer, token] = authorization.split(" ");

  if (!bearer) return next(httpError(401, noProvide));

  try {
    const { id } = jwt.verify(token, SECRET_KEY);

    const user = await User.findById(id).exec();
    if (!user || !user.token || user.token !== token)
      return next(httpError(401, noProvide));

    req.user = user;

    return next();
  } catch {
    return next(httpError(401, noProvide));
  }
};

module.exports = auth;
