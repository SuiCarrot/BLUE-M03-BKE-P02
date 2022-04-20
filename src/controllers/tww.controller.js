const lordsService = require('../services/tww.service.js');

const findLordsController = (req, res) => {
  res.send(lordsService.findLordsService());
};

const findLordByIdController = (req, res) => {

  if(!req.params.id){
    return res.status(400).send({message: "ID not informed!"})
  }

  if (!lordsService.findLordByIdService(req.params.id)){
    return res.status(404).send({message: "Legendary Lord not found!"})
  }

  res.send(lordsService.findLordByIdService(req.params.id));
};

const createLordController = (req, res) => {
  if (
    !req.body ||
    !req.body.lordName ||
    !req.body.faction ||
    !req.body.race ||
    !req.body.img
  ) {
    return res.status(400).send({ message:
      "You didn't fill in all the data to add the Legendary Lord."}
    );
  }

  res.send(lordsService.createLordService(req.body));
};

const updateLordController = (req, res) => {
  if(!req.params.id){
    return res.status(404).send({message: "Legendary Lord not found!"})
  }

  if (
    !req.body ||
    !req.body.lordName ||
    !req.body.faction ||
    !req.body.race ||
    !req.body.img
  ) {
    return res.status(400).send({ message:
      "You didn't fill in all the data to add the Legendary Lord."}
    );
  }
  res.send(lordsService.updateLordService(req.params.id, req.body));
};

const deleteLordController = (req, res) => {
  if(!req.params.id){
    return res.status(404).send({message: "Legendary Lord not found!"});}

  lordsService.deleteLordService(req.params.id);
  res.send({ message: 'Legendary Lord sucessfully deleted!' });
};

module.exports = {
  findLordsController,
  findLordByIdController,
  createLordController,
  updateLordController,
  deleteLordController,
};
