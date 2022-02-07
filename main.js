const date = require('./date')

function foo() {
    const dt = date.bar('D MMMM yyyy hh:mm');
    console.log('Hello World of the QA Automation, change for PR test');
    console.log(dt)
}

foo();