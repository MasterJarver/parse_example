const request = require('request');
const cheerio = require('cheerio');
request('https://rbc.ru', (err, response, html) => {
    if(err) {
        throw err;
    }
    else if(!err && response.statusCode === 200) {
        const $ = cheerio.load(html);
        console.log($('.indicators__sum').eq(0).text());
    }
});