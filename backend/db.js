const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const DATA_DIR = path.join(__dirname, 'data');
const REQUESTS_FILE = path.join(DATA_DIR, 'requests.json');
const ADMIN_FILE = path.join(DATA_DIR, 'admin.json');

// Ensure data dir exists
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

// Initialize requests store
function readRequests() {
  if (!fs.existsSync(REQUESTS_FILE)) return [];
  return JSON.parse(fs.readFileSync(REQUESTS_FILE, 'utf8'));
}

function writeRequests(data) {
  fs.writeFileSync(REQUESTS_FILE, JSON.stringify(data, null, 2));
}

// Initialize admin
function readAdmin() {
  if (!fs.existsSync(ADMIN_FILE)) {
    const hash = bcrypt.hashSync('Weinschenck2026!', 10);
    const admin = { password_hash: hash };
    fs.writeFileSync(ADMIN_FILE, JSON.stringify(admin, null, 2));
    return admin;
  }
  return JSON.parse(fs.readFileSync(ADMIN_FILE, 'utf8'));
}

module.exports = {
  // Requests
  getAllRequests(filters = {}) {
    let data = readRequests();
    if (filters.budget) data = data.filter(r => r.budget === filters.budget);
    if (filters.city) data = data.filter(r =>
      r.city.toLowerCase().includes(filters.city.toLowerCase()) ||
      r.zip.includes(filters.city)
    );
    if (filters.project_type) data = data.filter(r => r.project_type === filters.project_type);
    if (filters.status) data = data.filter(r => r.status === filters.status);
    return data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  },

  getRequestById(id) {
    return readRequests().find(r => r.id === parseInt(id)) || null;
  },

  createRequest(data) {
    const requests = readRequests();
    const maxId = requests.reduce((m, r) => Math.max(m, r.id), 0);
    const request = {
      id: maxId + 1,
      ...data,
      status: 'neu',
      created_at: new Date().toISOString()
    };
    requests.push(request);
    writeRequests(requests);
    return request;
  },

  updateStatus(id, status) {
    const requests = readRequests();
    const idx = requests.findIndex(r => r.id === parseInt(id));
    if (idx === -1) return false;
    requests[idx].status = status;
    writeRequests(requests);
    return true;
  },

  deleteRequest(id) {
    const requests = readRequests();
    const filtered = requests.filter(r => r.id !== parseInt(id));
    writeRequests(filtered);
  },

  // Admin
  getAdmin: readAdmin,
};
