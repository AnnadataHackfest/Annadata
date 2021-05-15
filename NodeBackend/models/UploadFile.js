const mongoose = require('mongoose');

const UploadFileSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    trim: true,
    default: '',
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

const UploadFile = mongoose.model('UploadFile', UploadFileSchema);
module.exports = UploadFile;
