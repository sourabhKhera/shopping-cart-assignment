const bannersDetails = require("../banners/index.get.json");
const productDetails = require("../products/index.get.json");
const categories = require("../categories/index.get.json");

module.exports = (app) => {
  app.get("/banners", (req, res) => {
    // const readStream = fs.createReadStream(
    //   path.resolve(__dirname, "../banners/index.get.json")
    // );
    // readStream.pipe(res);
    res.json(bannersDetails);
  });
  app.get("/products", (req, res) => {
    res.json(productDetails);
  });
  app.get("/categories", (req, res) => {
    res.json(categories);
  });
};
