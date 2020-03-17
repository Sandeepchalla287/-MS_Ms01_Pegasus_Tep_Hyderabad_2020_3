// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;
console.log(faker.food.indian());
console.log(faker.food.italian());
console.log(faker.food.continental());
console.log(faker.food.chinese());
console.log(faker.food.drinks());
