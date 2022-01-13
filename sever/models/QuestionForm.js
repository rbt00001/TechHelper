const { Schema, model } = require("mongoose");

// THIS NEEDED TO BE RETROFITTED TO HAVE THE PROPER CHANEL SO AS TO FOLLOW FLOW

const TechHelper = new Schema({
  tech1: {
    type: String,
    required: true,
  },
  tech2: {
    type: String,
    required: true,
  },
  tech1_votes: {
    type: Number,
    default: 0,
  },
  tech2_votes: {
    type: Number,
    default: 0,
  },
});

const Matchup = model("Matchup", matchupSchema);

module.exports = Matchup;
