const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const Media = require('../module/Media');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const newMedia = new Media({
      filename: req.file.filename,
      filepath: req.file.path,
      filetype: req.file.mimetype,
      message: req.body.message
    });
    const saved = await newMedia.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const media = await Media.find().sort({ createdAt: -1 });
  res.json(media);
});

router.delete('/:id', async (req, res) => {
  await Media.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
