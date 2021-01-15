#!/usr/bin/env node
const bases = process.argv.splice(0, 2)

inquirer = require('inquirer')

const firList = [
  {
    type: 'list',
    name: 'action',
    message: 'What do you want to do?',
    choices: [
      {
        name: 'init a program',
        value: 'zgp'
      }
    ]
  }
]

const secList = [
  {
    type: 'list',
    name: 'type',
    message: 'What kind of type do you want?',
    choices: [
      {
        name: 'mini program',
        value: 'default'
      },
      {
        name: 'pages-boilerplate program',
        value: 'poiler'
      },
      {
        name: 'vue2cli3-base program',
        value: 'vue2cli3-base'
      }
    ]
  }
]

function main() {
  inquirer
    .prompt(firList)
    .then((answers) => {
      forward(answers.action)
    })
}

function forward(action) {
  bases.push(action)
  inquirer
    .prompt(secList)
    .then((answers) => {
      if(answers.type !== 'default'){
        bases[2] = bases[2] + ':' + answers.type
      }
      process.argv = bases
      require('yo/lib/cli')
    })
}

main()