import db from "../config/db.js";

export const getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json({ message: err });
    res.json(results);
  });
};


export const getProductById = (req, res) => {
  db.query(
    "SELECT * FROM products WHERE id=?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });
      if (results.length === 0)
        return res.status(404).json({ message: "Produk tidak ditemukan" });
      res.json(results[0]);
    }
  );
};

export const createProduct = (req, res) => {
  const { category_id, name, price } = req.body || {};

  if (!category_id || !name || !price) {
    return res.status(400).json({
      message: "category_id, name, dan price wajib diisi"
    });
  }

  db.query(
    "INSERT INTO products (category_id, name, price) VALUES (?, ?, ?)",
    [category_id, name, price],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });
      res.json({ id: results.insertId, category_id, name, price });
    }
  );
};

export const updateProduct = (req, res) => {
  const { category_id, name, price } = req.body || {};

  if (!category_id || !name || !price) {
    return res.status(400).json({
      message: "category_id, name, dan price wajib diisi"
    });
  }

  db.query(
    "UPDATE products SET category_id=?, name=?, price=? WHERE id=?",
    [category_id, name, price, req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });
      if (results.affectedRows === 0)
        return res.status(404).json({ message: "Produk tidak ditemukan" });
      res.json({ message: "Produk berhasil diupdate" });
    }
  );
};

export const deleteProduct = (req, res) => {
  db.query(
    "DELETE FROM products WHERE id=?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ message: err });
      if (results.affectedRows === 0)
        return res.status(404).json({ message: "Produk tidak ditemukan" });
      res.json({ message: "Produk berhasil dihapus" });
    }
  );
};
