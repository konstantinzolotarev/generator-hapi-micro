/**
 * Step 8
 * Called last, cleanup, say good bye, etc
 */

import chalk from 'chalk';
import printMessage from 'print-message';

export default function () {
  printMessage([
    `Your ${chalk.green('Hapi')} Application has been created!`,
    `---`,
    `To start your application, run: ${chalk.red('npm start')}`,
    `Main URL: http://localhost:3000/api/v1`
  ], {
    printFn: this.log
  });
};
