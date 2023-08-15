// Dependencies
const { Connection } = require("./database/connection");
const express = require("express");
const cors = require("cors");

// Connection DB
Connection();

// Create Server
const app = express();
const port = 3900;

// Configure CORS
app.use(cors());

// Convert body data to JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Config routes

app.get("/test", (request, response) => {
  response.status(200).json({
    message: "This is a test Owo",
  });
});

const userRoutes = require("./routes/user");
const publicationRoutes = require("./routes/publication");
const followRoutes = require("./routes/follow");

app.use("/api/user", userRoutes);
app.use("/api/publication", publicationRoutes);
app.use("/api/follow", followRoutes);

// Server to listen HTTP Petitions
app.listen(port, () => {
  console.log("Running server on port ", port);
});
