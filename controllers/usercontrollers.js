import db from "../config/db.js";


export const getUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ message: err });
    res.json(results);
  });
};


export const getUserById = (req, res) => {
  db.query(
    "SELECT * FROM users WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });
      if (results.length === 0)
        return res.status(404).json({ message: "User tidak ditemukan" });
      res.json(results[0]);
    }
  );
};


export const createUser = (req, res) => {
  const { name, email } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({
      message: "Nama dan email wajib diisi"
    });
  }

  db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });
      res.json({ id: results.insertId, name, email });
    }
  );
};


export const updateUser = (req, res) => {
  const { name, email } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({
      message: "Nama dan email wajib diisi"
    });
  }

  db.query(
    "UPDATE users SET name=?, email=? WHERE id=?",
    [name, email, req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });
      if (results.affectedRows === 0)
        return res.status(404).json({ message: "User tidak ditemukan" });
      res.json({ message: "User berhasil diupdate" });
    }
  );
};


export const deleteUser = (req, res) => {
  db.query(
    "DELETE FROM users WHERE id=?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });
      if (results.affectedRows === 0)
        return res.status(404).json({ message: "User tidak ditemukan" });
      res.json({ message: "User berhasil dihapus" });
    }
  );
};

