const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'garten_secret_2026';

function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Nicht autorisiert' });
  }
  const token = header.split(' ')[1];
  try {
    req.admin = jwt.verify(token, SECRET);
    next();
  } catch {
    return res.status(401).json({ error: 'Token ungültig' });
  }
}

module.exports = { authMiddleware, SECRET };
