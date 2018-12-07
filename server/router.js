const express = require('express');
const getRandomTukkomi = require('./get-random-tukkomi.js');

const tukkomiRoboRouter = express.Router();

tukkomiRoboRouter.get('/', (req, res) => {
  const { phrase } = req.query;
  const message = phrase ? `${phrase}...って、${getRandomTukkomi()}` : '何も言わんの？';
  res.send(message);
});

module.exports = tukkomiRoboRouter;
