const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const url =
  "mongodb+srv://admin:<password>@nightlyapi.22ja7.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);
