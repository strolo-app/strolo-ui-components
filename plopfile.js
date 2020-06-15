const path = require('path');
const fs = require('fs');

module.exports = function (plop) {
  plop.addHelper('cwd', () => process.cwd());
  plop.addHelper('src', () => {
    return `${plop.getPlopfilePath()}/src`;
  });

  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
        validate: (value) => {
          if (value.length) {
            return true;
          }
          return 'name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{src}}/components/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: '.plop/component/component.hbs',
      },
      {
        type: 'add',
        path: '{{src}}/components/{{kebabCase name}}/index.ts',
        templateFile: '.plop/component/index.hbs',
      },
    ],
  });
};
