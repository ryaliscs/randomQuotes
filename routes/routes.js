const quoteRoutes = require("./quotes");
const path = require("path");

const appRouter = (app, fs) => {
  app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../index.html"));
  });

  quoteRoutes(app, fs);
};

module.exports = appRouter;
