const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const Token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjI5ZjQ4N2NkLWRjMDgtNDE5Ni1hYzJmLWRlZGQyMzk3NTZkMy0xNzE5OTYxNzQ3NDQ0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMjE4YWY4NWItNTBiOS00YzIxLTg4N2EtMWM0Mzc2YThiZjkxIiwidHlwZSI6InQifQ.-L9ncU8pauGCrrMWEsSv62hy5ISsF6P9SQyN_IRt7WQ'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: Token,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
