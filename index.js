const inquirer = require('inquirer');
const { writeFile } = require('fs');
const generateREADME = ({ project, description, usage, license, contribution, installation, test, github, email }) => `
# ${project}

### Table of Contents
* [description](#description) Description
* [installation](#installation) Installation
* [usage](#usage) Usage
* [license](#license) License
* [contributions](#contributions) Contributions
* [tests](#tests) Tests
* [questions](#questions) Questions

## Description
${description}

## Installation
${installation}

## Usage
${usage}
## License
${license}
Copyright (c)

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

## Contributions
${contribution}

## Tests
${test}

## Questions
For any additional questions contact at https://github.com/${github} or ${email}

`;

const promptUser = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'project',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter Project License',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How does somebody contribute to this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter any testing information',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    },
 ]);
};
const init = () => {
    promptUser()
    .then((answers) => writeFile('README.md', generateREADME(answers)))
    .then(() => console.log('Created README!'))
    .catch((err) => console.error(err));
};

init();
