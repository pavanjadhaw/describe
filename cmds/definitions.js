const ora = require('ora');
const getWord = require('../utils/query');
const handleError = require('../utils/error');

module.exports = async args => {
  const spinner = ora().start();

  try {
    const path = '/entries/en/' + args._[0].toLowerCase();
    const result = await getWord(path);

    spinner.stop();

    const definition =
      result.lexicalEntries[0].entries[0].senses[0].definitions[0];

    console.log(`${args._[0]} is ${definition}`);
  } catch (error) {
    spinner.stop();
    handleError(error.response.status);
  }
};
