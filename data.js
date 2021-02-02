const faker = require("faker");
const { v4: uuidv4 } = require("uuid");

const instruments = [
  "Guitar",
  "Oboe",
  "Piano",
  "Trumpet",
  "Violin",
  "Hapsicord",
  "Drums",
  "Tuba",
  "Violoncello",
  "Sax",
  "Voice",
  "Flute",
];
module.exports = function generateScores() {
  const scores = [];
  for (let id = 0; id < 50; id += 1) {
    const instrumentation = [];
    for (let i = 0; i < 1 + Math.floor(Math.random() * 5); i += 1) {
      instrumentation.push(instruments[Math.floor(Math.random() * 12)]);
    }
    scores.push({
      _id: uuidv4(),
      title: faker.lorem.word(),
      composer: faker.name.firstName() + " " + faker.name.lastName(),
      style: faker.music.genre(),
      instrumentation: instrumentation,
      stock: 1 + Math.floor(Math.random() * 3),
      owner: faker.name.firstName(),
    });
  }
  return { scores, instruments };
};
