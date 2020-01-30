const App = require('../client/src/component/App.jsx');

test('expect state to be an object', () => {
  expect(App.state).toMatchObject({
    cost: 0,
    taxes: 0,
    fees: 0,
    rate: 0
  });
});