// Test Actions
const testUser = (request, response) => {
  response.status(200).send({ message: "Sent by controller/user.js" });
};

// Export Actions
module.exports = {
  testUser,
};
