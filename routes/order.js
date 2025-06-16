const express = require('express');
const router = express.Router();
const emailjs = require('@emailjs/nodejs'); // ← 加這個

router.post('/', async (req, res) => {
  const { name, phone, email, address, total, items } = req.body;

  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      { name, phone, email, address, total, items },
      { publicKey: process.env.EMAILJS_PUBLIC_KEY, privateKey: process.env.EMAILJS_PRIVATE_KEY }
    );

    res.json({ success: true });
  } catch (err) {
    console.error('EmailJS 發送失敗：', err);
    res.status(500).json({ error: '寄信失敗' });
  }
});

module.exports = router;
