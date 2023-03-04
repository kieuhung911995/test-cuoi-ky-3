const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3001;

mongoose.connect("mongodb://127.0.0.1:27017/tuhocMongoose");

const orderModel = require("./order.schema");
const inventoryModel = require("./inventory.schema");
const userModel = require("./user.schema");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/inventory", async (req, res) => {
  try {
    //const result = await inventoryModel.find()
    const result = await inventoryModel.find({ instock: { $lt: 100 } });
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const findUser = await userModel.findOne({
      username: `${req.body.username}`,
      password: `${req.body.password}`,
    });
    if (findUser) {
      const token = jwt.sign(
        { username: `${findUser.username}`, id: `${findUser._id}` },
        "afjjsahjfhjkas"
      );
      res.send(`findUser:${findUser}, token:${token}`);
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
