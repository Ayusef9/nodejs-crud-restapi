Project ini adalah sebuah Rest Api sederhana menggunakan Node.js, Express.js dan juga MySQL yang dimana menyediakan fitur CRUD(Create, Read, Update, Delete) untuk Users, Categories dan Products. 
Untuk menjalankan project ini bisa menggunakan server biasa yang diketik didalam command prompt(node server.js) dan jika berhasil Server running at http://localhost:3000
Mysql berhasil connect. Setelah itu kita bisa melakukan pengujian API menggunakan Postman dimana memakai method ada GET, POST, PUT dan DELETE.
Contohnya seperti: GET http://localhost:3000/products yang akan muncul adalah
[
    {
        "id": 1,
        "category_id": 2,
        "name": "Mie Rebus",
        "price": "13000.00",
        "created_at": "2025-12-13T13:40:11.000Z"
    }
]
