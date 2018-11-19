const generate = require('../index');

console.info('Starting tests...');


let id1 = generate();
// id should be a Starting
if (typeof id1 !== 'string') {
  throw new Error('id is not a string!');
}

// ids are unique
for (let i = 0; i < 100; i++) {
  const id2 = generate();
  if (id2 === id1) {
    throw new Error('ids are not unique!');
  }
  id1 = id2;
}

console.info('Tests are finished');