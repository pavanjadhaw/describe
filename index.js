const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2), {
    alias: {
      s: 'synonyms',
      a: 'anonyms',
      d: 'definition',
      h: 'help',
      v: 'version'
    }
  });

  let cmd = args._[0] || 'help';

  if (args.s) {
    cmd = 'syn';
  }

  if (args.a) {
    cmd = 'ant';
  }

  if (args.v) {
    cmd = 'ver';
  }

  if (args.h) {
    cmd = 'help';
  }

  switch (cmd) {
    case 'syn':
      require('./cmds/synonyms')(args);
      break;
    case 'ant':
      require('./cmds/antonyms')(args);
      break;
    case 'ver':
      require('./cmds/version')(args);
      break;
    case 'help':
      require('./cmds/help')(args);
      break;
    default:
      require('./cmds/definitions')(args);
      break;
  }
};
