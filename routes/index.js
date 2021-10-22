const { Router } = require('express');

const router = Router();

const about = require('../json/about.json');

router.get('/', (req, res) => {
  res.render('home', { person: { name: 'Snorlax' } });
});

router.get('/about', (req, res) => {
  res.render('about', about);
});

module.exports = router;
