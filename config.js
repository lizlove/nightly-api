const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const url =
  "mongodb+srv://admin:nightly@nightlyapi.22ja7.mongodb.net/nightly?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);
