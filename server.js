import express from "express";
import dotenv from "dotenv";
dotenv.config();

import userRoute from "./routes/user.Route.js";
import categoryRoute from "./routes/category.Route.js";
import productRoute from "./routes/product.Route.js";

const app = express();
app.use(express.json());


app.use("/users", userRoute);
app.use("/categories", categoryRoute);
app.use("/products", productRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
