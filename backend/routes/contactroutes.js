// routes/contactroutes.js
const express = require('express');
const router = express.Router();
const Contact = require('../module/Contact.js');

// POST /api/contacts → Add Contact
router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const saved = await newContact.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Failed to save contact', error: err });
  }
});

// GET /api/contacts → Get All Contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get contacts', error: err });
  }
});

// PATCH /api/contacts/:id/read → Mark as read
router.patch('/:id/read', async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, { isRead: true });
    res.json({ message: 'Marked as read' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.put('/mark-read/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: 'Failed to mark as read', error: err });
  }
});

// DELETE /api/contacts/:id → Delete
router.delete('/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
