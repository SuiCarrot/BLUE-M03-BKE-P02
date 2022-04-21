const LegLord = require('../models/LegLords');

const findLordsService = async () => {
  return await LegLord.find();
};

const findLordByIdService = async (id) => {
  return await LegLord.findById(id);
};

const createLordService = async (newLord) => {
  return await LegLord.create(newLord);
};

const updateLordService = async (id, lordEdited) => {
  return await LegLord.findByIdAndUpdate(id, lordEdited);
};

const deleteLordService = async (id) => {
  return await LegLord.findByIdAndDelete(id);
};

module.exports = {
  findLordsService,
  findLordByIdService,
  createLordService,
  updateLordService,
  deleteLordService,
};
