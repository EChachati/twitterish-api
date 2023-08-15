// Test Actions
const testFollow = (request, response) => {
  response.status(200).send({ message: "Sent by controller/follow.js" });
};

// Export Actions
module.exports = {
  testFollow,
};
