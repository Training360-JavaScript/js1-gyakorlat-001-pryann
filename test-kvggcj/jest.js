const jest = require('jest');
const currentDir = process.cwd();
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const projectRootPath = '.';
const jestConfig = {
 roots: [`./test-kvggcj/jest`],
 testRegex: '\\.spec\\.js$'
};

clear();
console.log(
    chalk.yellow(
        figlet.textSync('TR360', { horizontalLayout: 'full' })
    )
);

// Run the Jest asynchronously.
const startTest = async () => {
    const result = await jest.runCLI(jestConfig, [projectRootPath]);
    
    if (result.results.success) {
      console.log(`Sikeres teszt!`);
      process.exit(0);
    } else {
      console.error(`Hibás teszt!`);
      process.exit(1);
    }
};

startTest();
