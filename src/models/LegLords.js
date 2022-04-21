const mongoose = require('mongoose');

const LegLordsSchema = new mongoose.Schema({
  lordName: { type: String, required: true },
  faction: { type: String, required: true },
  race: { type: String, required: true },
  img: { type: String, required: true },
});

const LegLord = mongoose.model('twwLegendaryLords', LegLordsSchema);

module.exports = LegLord;
