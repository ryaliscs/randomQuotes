const quoteRoutes = (app, fs) => {
  const dataPath = "./data/quotes.json";

  app.get("/quote", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      var jsonData = JSON.parse(data);
      var random = Math.floor(Math.random() * jsonData.quotes.length);
      var quote = jsonData.quotes[random];
      console.log(
        "Total Quotes: " + jsonData.quotes.length + " Picked :" + random
      );
      // console.log("Quote sent " + quote.quote + " - by " + quote.by);
      res.send(quote);
    });
  });
};

module.exports = quoteRoutes;
