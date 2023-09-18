const fs = require("node:fs/promises");
const path = require("node:path");
const { wrapperError } = require("../../helpers");

const express = require("express");

const router = express.Router();

const recommentedFood = async (req, res) => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "..", "..", "db", "RecommendedFood.json"),
      "utf8"
    );

    res.send(JSON.parse(data));
  } catch (error) {
    console.error(error);

    res.status(500).send("Internal server error");
  }
};

module.exports = { recommentedFood: wrapperError(recommentedFood) };
