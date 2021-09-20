const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('home', { person: { name: 'Arthur' } });
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
