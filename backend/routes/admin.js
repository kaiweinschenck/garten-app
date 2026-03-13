const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const { authMiddleware, SECRET } = require('../middleware/auth');

const router = express.Router();

// POST /api/admin/login
router.post('/login', (req, res) => {
  const { password } = req.body;
  const admin = db.getAdmin();
  if (!admin || !bcrypt.compareSync(password, admin.password_hash)) {
    return res.status(401).json({ error: 'Falsches Passwort' });
  }
  const token = jwt.sign({ admin: true }, SECRET, { expiresIn: '8h' });
  res.json({ token });
});

// GET /api/admin/requests
router.get('/requests', authMiddleware, (req, res) => {
  const { budget, city, project_type, status } = req.query;
  res.json(db.getAllRequests({ budget, city, project_type, status }));
});

// GET /api/admin/requests/:id
router.get('/requests/:id', authMiddleware, (req, res) => {
  const request = db.getRequestById(req.params.id);
  if (!request) return res.status(404).json({ error: 'Nicht gefunden' });
  res.json(request);
});

// PATCH /api/admin/requests/:id/status
router.patch('/requests/:id/status', authMiddleware, (req, res) => {
  const { status } = req.body;
  const valid = ['neu', 'geprüft', 'Termin vereinbart', 'Angebot erstellt'];
  if (!valid.includes(status)) return res.status(400).json({ error: 'Ungültiger Status' });
  const ok = db.updateStatus(req.params.id, status);
  if (!ok) return res.status(404).json({ error: 'Nicht gefunden' });
  res.json({ success: true });
});

// DELETE /api/admin/requests/:id
router.delete('/requests/:id', authMiddleware, (req, res) => {
  db.deleteRequest(req.params.id);
  res.json({ success: true });
});

module.exports = router;
