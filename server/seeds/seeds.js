const db = require("../config/connection");
const { Tech } = require("../models");

const techQuestions = require("./techQuestions.json");

db.once("open", async () => {
  await Tech.deleteMany({});

  const technologies = await Tech.insertMany(techQuestions);

  console.log("Questions Seeded!");
  process.exit(0);
});
