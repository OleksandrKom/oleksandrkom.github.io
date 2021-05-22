const tinyurl = require('tinyurl');
const Url = require('../model/Urls');

// const baseUrl = 'https://aliexpress.ru/category/202060970/travel-roadway-product.html';

const getUrl = (req, res) => {
  res.render('index');
}

const addUrl = (req, res) => {
  const newUrl = new Url(req.body);

  newUrl.save(function (err, data) {
    if (err) throw err;
    res.sendStatus(200);
  });
};

// const getShortUrl = () => {
//   const shortUrl = tinyurl??
//   return 
//   console.log(shortUrl);
// }


module.exports = {
  addUrl,
  getUrl,
 
};