const ora = require('ora');
const getWord = require('../utils/query');
const handleError = require('../utils/error');

module.exports = async args => {
  const spinner = ora().start();

  try {
    const path = '/entries/en/' + args.s.toLowerCase() + '/synonyms';
    const result = await getWord(path);

    spinner.stop();

    const syn = result.lexicalEntries[0].entries[0].senses[0].synonyms;

    syn.forEach(element => {
      console.log(element.text);
    });
  } catch (error) {
    spinner.stop();
    handleError(error.response.status);
  }
};
