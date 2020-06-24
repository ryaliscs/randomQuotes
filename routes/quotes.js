const quoteRoutes = (app, fs) => {
  const dataPath = "./data/quotes.json";

  app.get("/quotes", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = quoteRoutes;
