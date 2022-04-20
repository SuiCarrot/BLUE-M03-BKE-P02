const twwLegendaryLords = [
  {
    id: 1,
    lordName: 'Emperor Karl Franz',
    faction: 'The Empire',
    race: 'The Empire',
    img: './assets/images/karl-franz.png',
  },
  {
    id: 2,
    lordName: 'Vlad von Carstein',
    faction: 'Von Carstein',
    race: 'Vampire Counts',
    img: './assets/images/vlad.png',
  },
  {
    id: 3,
    lordName: 'Belegar Ironhammer',
    faction: 'Clan Angrund',
    race: 'Dwarfs',
    img: './assets/images/belegar.png',
  },
  {
    id: 4,
    lordName: 'Skarsnik',
    faction: 'Crooked Moon',
    race: 'Greenskins',
    img: './assets/images/skarsnik.png',
  },
  {
    id: 5,
    lordName: 'Lokhir Fellheart',
    faction: 'The Blessed Dread',
    race: 'Dark Elves',
    img: './assets/images/lokir.png',
  },
  {
    id: 6,
    lordName: 'Count Noctilus',
    faction: 'Dreadfleet',
    race: 'Vampire Coast',
    img: './assets/images/noctilus.png',
  },
];

const findLordsService = () => {
  return twwLegendaryLords;
};

const findLordByIdService = (id) => {
  return twwLegendaryLords.find((legLord) => legLord.id == id);
};

const createLordService = (newLord) => {
  newLord.id = twwLegendaryLords.length + 1;
  twwLegendaryLords.push(newLord);
  return newLord;
};

const updateLordService = (id, lordEdited) => {
  lordEdited['id'] = id;
  const lordIndex = twwLegendaryLords.findIndex((lord) => lord.id == id);
  twwLegendaryLords[lordIndex] = lordEdited;
  return lordEdited;
};

const deleteLordService = (id) => {
  return twwLegendaryLords.splice(
    twwLegendaryLords.findIndex((lord) => lord.id == id),
    1,
  );
};

module.exports = {
  findLordsService,
  findLordByIdService,
  createLordService,
  updateLordService,
  deleteLordService,
};
