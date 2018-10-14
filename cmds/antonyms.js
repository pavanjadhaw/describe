const ora = require('ora');
const getWord = require('../utils/query');
const handleError = require('../utils/error');

module.exports = async args => {
  const spinner = ora().start();

  try {
    const path = '/entries/en/' + args.a.toLowerCase() + '/antonyms';
    const result = await getWord(path);

    spinner.stop();

    const ant = result.lexicalEntries[0].entries[0].senses[0].antonyms;

    ant.forEach(element => {
      console.log(element.text);
    });
  } catch (error) {
    spinner.stop();
    handleError(error.response.status);
  }
};
