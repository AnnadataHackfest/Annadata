const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();
const auth = require('../../middleware/auth');
const { randomString } = require('../../utils/utility');
const User = require('../../models/User');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

let otpList = [];

// Remove expired OTP from OPT_List
const removeExpiredOTP = () => {
  const temp = otpList.filter((item) => {
    const current = new Date();
    // Remove OTP expired 10 minutes ago
    return current.getTime() - item.generatedTime < 1000 * 60 * 10;
  });
  otpList = temp;
};

// Remove used OTP from OPT_List
const removeUsedOTP = (OTP) => {
  const temp = otpList.filter((item) => item.OTP !== OTP.OTP);
  otpList = temp;
};

// find OTP in otpList
const findOTP = (givenOTP) => {
  const obj = otpList.find((o, i) => {
    if (o.OTP === givenOTP.OTP) {
      return true; // stop searching
    }
  });
  if (obj === null || obj === undefined) {
    return false;
  }

  return true;
};

// Get OTP via SMS
router.post('/sms', (req, res) => {
  removeExpiredOTP();
  const { phone } = req.body;
  const rstring = randomString(10);
  const d = new Date();
  const otp = {
    OTP: rstring,
    generatedTime: d.getTime(),
  };
  otpList.push(otp);
  client.messages
    .create({
      body: `Welcome to Annadata. Your OTP is ${otp.OTP}`,
      from: '+14246257905',
      to: phone,
    })
    .then((message) => {
      console.log(message.sid);
      res.json({ msg: 'Successfully sent OTP' });
    })
    .catch((error) => {
      console.log('Error occured in Twilio Api ', error);
      removeUsedOTP(otp);
      res.status(400).json({ msg: 'An error occured' });
    });
});

// Get OTP via email
router.post('/email', (req, res) => {
  removeExpiredOTP();
  const { email } = req.body;
  console.log('email ', email);
  const rstring = randomString(10);
  const d = new Date();
  const otp = {
    OTP: rstring,
    generatedTime: d.getTime(),
  };
  otpList.push(otp);

  const sendorEmail = process.env.GMAIL_ID;
  const sendorPassword = process.env.GMAIL_PASSWORD;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: sendorEmail,
      pass: sendorPassword,
    },
  });
  const emailmessage = `Welcome to Annadata.Your OTP is ${otp.OTP}`;
  const mailOptions = {
    from: sendorEmail,
    to: email,
    subject: 'Annadata OTP Verification',
    text: emailmessage,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occured in sending email ', error);
      res.status(400).json({ msg: 'An error occured' });
    } else {
      console.log('Email sent ', info);
      res.json({ msg: 'Successfully sent OTP' });
    }
  });
});

// verify OTP
router.post('/verify', auth, (req, res) => {
  const { OTP } = req.body;
  // Simple validation
  if (!OTP) {
    return res.status(400).json({ msg: 'Please enter valid OTP' });
  }
  if (findOTP(OTP)) {
    User.findById(req.user.id, (err, user) => {
      if (err || !user) {
        return res.status(400).json({
          msg: 'User not found',
        });
      }
      const savedUser = user;
      savedUser.verified = true;
      savedUser.save((error, updatedUser) => {
        if (error) {
          console.log('Error in updating user verify status', error);
          return res.status(400).json({
            msg: 'User update failed',
          });
        }
        removeUsedOTP(OTP);
        return res.json({ msg: 'Successfully verified OTP' });
      });
    });
  } else {
    return res.status(400).json({ msg: 'Invalid OTP' });
  }
});

module.exports = router;
