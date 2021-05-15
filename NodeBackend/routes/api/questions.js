const express = require('express');

const router = express.Router();
const auth = require('../../middleware/auth');

// item model
const Question = require('../../models/Question');

router.get('/', (req, res) => {
  Question.find()
    .sort({ date: -1 })
    .then((questions) => res.json(questions));
});

router.post('/', auth, (req, res) => {
  const newQuestion = new Question({
    question: req.body.question,
    name: req.body.name,
    phone: req.body.phone,
  });

  newQuestion.save().then((question) => res.json(question));
});

// router.delete('/:id', auth,  (req, res) => {
//     Item.findById(req.params.id)
//      .then(item => item.remove().then(() => res.json({success: true})))
//      .catch(err => res.status(404).json({success: false}));
// });

module.exports = router;
