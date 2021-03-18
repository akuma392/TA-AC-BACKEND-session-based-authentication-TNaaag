var express = require('express');
var router = express.Router();
var User = require('../models/user');

var Item = require('../models/item');
var Comment = require('../models/comment');

router.get('/', (req, res, next) => {
  console.log(req.session.userId, 'from items......');
  var session = req.session.userId;
  Item.find({}, (err, items, next) => {
    if (err) return next(err);
    User.findById(session, (err, user) => {
      if (err) return next(err);
      console.log(user, '000000000000000000000000000000000000000');
      res.render('item', {
        items: items,
        // session: session || {},
        user: user || {},
      });
    });
  });
});
router.get('/new', (req, res, next) => {
  res.render('createItem');
});

router.post('/', (req, res, next) => {
  var id = req.session.userId;
  req.body.authorId = id;
  Item.create(req.body, (err, item) => {
    console.log(err, req.body);
    if (err) return next(err);
    User.findByIdAndUpdate(id, { itemId: item._id }, (err, user) => {
      res.redirect('/items');
    });
  });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  let session = req.session.userId;
  Item.findById(id, (err, item) => {
    if (err) return next(err);
    User.findById(session, (err, user) => {
      if (err) return next(err);

      res.render('singleItem', { item: item, session: session, user: user });
    });
  });
});

router.get('/:id/delete', (req, res, next) => {
  let id = req.params.id;
  Item.findByIdAndDelete(id, (err, deletedItem) => {
    if (err) next(err);
    res.redirect('/items');
  });
});

router.get('/:id/edit', (req, res, next) => {
  let id = req.params.id;
  Item.findById(id, (err, item) => {
    if (err) next(err);
    res.render('updateItem', { item: item });
  });
});

router.post('/:id/edit', (req, res) => {
  let id = req.params.id;
  console.log(req.body);
  Item.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedItem) => {
    if (err) next(err);
    res.redirect('/items/' + id);
  });
});

router.get('/:id/like', (req, res, next) => {
  let id = req.params.id;
  console.log(req);
  Item.findByIdAndUpdate(id, { $inc: { likes: 1 } }, (err, updatedArticle) => {
    // if (err) next(err);
    res.redirect('/items/' + id);
  });
});

router.get('/:id/dislike', (req, res, next) => {
  let id = req.params.id;
  console.log(req);
  Item.findByIdAndUpdate(id, { $inc: { likes: -1 } }, (err, updatedArticle) => {
    // if (err) next(err);
    res.redirect('/items/' + id);
  });
});

// router.post('/:id/comments', (req, res, next) => {
//   var id = req.params.id;
//   console.log(req.body);
//   console.log('hello comment');
//   req.body.articleId = id;
//   Comment.create(req.body, (err, comment) => {
//     if (err) next(err);
//     Article.findByIdAndUpdate(
//       id,
//       { $push: { commentId: comment._id } },
//       (err, article) => {
//         if (err) next(err);
//         res.redirect('/articles/' + article.slug);
//       }
//     );
//   });
// });
module.exports = router;
