const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');
const { post } = require('./api');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: [
            'username'
          ]
        },
        {
          model: Comment
        }
      ],
      order: [
        ['created_at', 'DESC']
      ]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.status(200).render('homepage', {
      posts,
      logged_in: req.session.logged_in,
      username: req.session.username
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;