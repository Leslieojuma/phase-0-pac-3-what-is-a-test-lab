const name = "Joe";
const height = 74;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};
module.exports.name = "Susan";
module.exports.height = 35;
module.exports.message = `${module.exports.name} is ${module.exports.height} inches tall`;