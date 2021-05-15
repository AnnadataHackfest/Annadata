const express = require('express');

const router = express.Router();
const cloudinary = require('cloudinary').v2;
const UploadFile = require('../../models/UploadFile');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post('/', auth, (req, res) => {
  const { file } = req.files;
  console.log(file);
  cloudinary.uploader.upload(
    file.tempFilePath,
    { resource_type: 'auto' },
    function (err, result) {
      if (err) {
        console.log('Error occured in cloudinary upload ', err);
        return res
          .status(400)
          .json({ msg: 'Error occured in cloudinary upload' });
      }
      console.log('Result is ', result);
      console.log('Hosted url is ', result.url);

      // TODO Save this URL in database =====================
      const { id } = req.user;
      console.log('User id is ', id);
      User.findById(id).exec((err, user) => {
        if (err || !user) {
          console.log('Error user not found ', err);
          return res.status(400).json({ msg: 'Sign in to upload file' });
        }

        const obj = new UploadFile({
          fileUrl: result.url,
        });
        user.uploadedFiles.push(obj);
        user.save((err, updatedUser) => {
          if (err || !updatedUser) {
            console.log('Error in saving url to database ', err);
            return res
              .status(400)
              .json({ msg: 'Error in saving url to database' });
          }

          res.json({
            msg: 'Successfully uploaded file to cloudinary',
            url: result.url,
          });
        });
      });
    }
  );
});

module.exports = router;
