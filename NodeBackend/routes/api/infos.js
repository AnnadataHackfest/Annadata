const express = require('express');

const router = express.Router();
const auth = require('../../middleware/auth');

// item model
const Info = require('../../models/Info');

router.get('/', (req, res) => {
  Info.find()
    .sort({ date: -1 })
    .then((infos) => res.json(infos));
});

router.post('/', auth, (req, res) => {
  const newInfo = new Info({
    question: req.body.question,
    answer: req.body.answer,
    name: req.body.name,
    phone: req.body.phone,
  });

  newInfo.save().then((info) => res.json(info));
});

// router.delete('/:id', auth,  (req, res) => {
//     Item.findById(req.params.id)
//      .then(item => item.remove().then(() => res.json({success: true})))
//      .catch(err => res.status(404).json({success: false}));
// });

module.exports = router;
