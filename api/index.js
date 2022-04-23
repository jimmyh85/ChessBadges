const express = require('express');
const app = express();

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

// API Root
app.get('/', (req, res, next) => {
  res.send('API root');
});

// API route to get the players of a given team
app.post('/get-players', async (req, res, next) => {
  const axios = require('axios');
  //const url = 'https://www.schachbund.de/SchachBL/bedm.php?liga=olob&nummer=6';
  const url = req.body.team_url;
  let players = [];

  const response = await axios.get(url);
  //console.log(html);

  if (response.status == 200) {
    const html = response.data;
    const cheerio = require('cheerio');
    const $ = cheerio.load(html);

    $('table.mannschaft > tbody > tr').each(function(i, elem) {
      let player = {};
      player.pos = $('.nr', this).text();
      player.name = $('.spieler > a', this).text();
      player.nationality = $('.nat', this).text();
      //player.nationality_img_url = '../assets/flags/' + player.nationality + '.png';
      player.elo =
        $('.elo', this).text() == '' ? '----' : $('.elo', this).text();
      player.dwz =
        $('.dwz', this).text() == '' ? '----' : $('.dwz', this).text();
      player.title = $('.tit', this).text();
      players.push(player);
    });
  }

  res.json(players);
});

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
};
