console.log("Hello World!");

const testVar = 100;

function test () {
    console.log(testVar);
}

module.exports.testVar = testVar;
module.exports.fn = test;

