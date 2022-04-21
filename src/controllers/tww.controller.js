const mongoose = require('mongoose');
const lordsService = require('../services/tww.service.js');

const findLordsController = async (req, res) => {
  res.send(await lordsService.findLordsService());
};

const findLordByIdController = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ message: 'ID invalid!' });
  }

  if (!(await lordsService.findLordByIdService(req.params.id))) {
    return res.status(404).send({ message: 'Legendary Lord not found!' });
  }

  res.send(await lordsService.findLordByIdService(req.params.id));
};

const createLordController = async (req, res) => {
  if (
    !req.body ||
    !req.body.lordName ||
    !req.body.faction ||
    !req.body.race ||
    !req.body.img
  ) {
    return res.status(400).send({
      message: "You didn't fill in all the data to add the Legendary Lord.",
    });
  }

  res.send(await lordsService.createLordService(req.body));
};

const updateLordController = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ message: 'Invalid ID!' });
  }

  if (!(await lordsService.findLordByIdService(req.params.id))) {
    return res.status(404).send({ message: 'Legendary Lord not found!' });
  }

  if (
    !req.body ||
    !req.body.lordName ||
    !req.body.faction ||
    !req.body.race ||
    !req.body.img
  ) {
    return res.status(400).send({
      message: "You didn't fill in all the data to add the Legendary Lord.",
    });
  }
  res.send(await lordsService.updateLordService(req.params.id, req.body));
};

const deleteLordController = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ message: 'Invalid ID!' });
  }
  if (!(await lordsService.findLordByIdService(req.params.id))) {
    return res.status(404).send({ message: 'Legendary Lord not found!' });
  }

  await lordsService.deleteLordService(req.params.id);
  res.send({ message: 'Legendary Lord sucessfully deleted!' });
};

module.exports = {
  findLordsController,
  findLordByIdController,
  createLordController,
  updateLordController,
  deleteLordController,
};
