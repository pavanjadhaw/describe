const menus = {
  main: `
    describe [command] <word>

    commands:
      -d ................ show defination
      -s ................ show synonyms
      -a ................ show antonyms

      -v ................ show package version
      -h ................ show help menu for a command
    `,

  definition: `
    describe <word>

    example:
      describe tiny

      tiny is very small
  `,

  synonyms: `
    describe -s <word>

    example: describe -s tiny
  `,

  antonyms: `
    describe -a <word>

    example: describe -a tiny

    
  `,
};

module.exports = args => {
  const subCmd = args._[0] === 'help' ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
