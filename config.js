const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () =>
  console.log(`Connected to mongo at ${url}`)
);
