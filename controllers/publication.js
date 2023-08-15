// Test Actions
const testPublication = (request, response) => {
  response.status(200).send({ message: "Sent by controller/publication.js" });
};

// Export Actions
module.exports = {
  testPublication,
};
