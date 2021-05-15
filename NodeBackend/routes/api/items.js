const express = require('express');

const router = express.Router();
const auth = require('../../middleware/auth');

// item model
const Item = require('../../models/Item');

router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

router.post('/', auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.json(item));
});

router.delete('/:id', auth, (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => {
      console.log(err);
      res.status(404).json({ success: false });
    });
});

module.exports = router;
