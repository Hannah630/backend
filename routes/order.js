const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, phone, email, address, total, items } = req.body;

  if (!name || !phone || !email || !address || !total || !items) {
    return res.status(400).json({ error: '缺少必要欄位' });
  }

  console.log('📦 接收到訂單：', req.body);

  // 將來可寫入資料庫
  res.status(200).json({ message: '訂單接收成功' });
});

module.exports = router;