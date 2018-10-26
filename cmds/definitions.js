const ora = require('ora');
const getWord = require('../utils/query');
const handleError = require('../utils/error');

module.exports = async args => {
  for (let i = 0; i < args._.length; i++) {
    const spinner = ora().start();

    try {
      const path = '/entries/en/' + args._[i].toLowerCase();
      const result = await getWord(path);

      spinner.stop();

      const definition =
        result.lexicalEntries[0].entries[0].senses[0].definitions[0];

      console.log(`${args._[i]} is ${definition}`);
    } catch (error) {
      spinner.stop();
      handleError(error.response.status);
    }
  }
};
