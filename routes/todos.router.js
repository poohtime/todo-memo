const express = require("express");
const router = express.Router();
const Todo = require("./models/todo.js");

router.post("/todos", async (req, res) => {
  const { value } = req.body;
  const maxOrderByUserId = await Todo.findOne().sort("-order").exec();

//   const order = maxOrderByUserId ? maxOrderByUserId.order + 1 : 
//   1;
//   const todo = new Todo({ value, order });
//   await todo.save();
//   res.send({ todo });
// })
// router.get("/todos", async (req, res) => {
//   const todos = await Todo.find().sort("-order").exec();

//   res.send({ todos:todos });
// });

// router.patch("/todos/:todoId", async (req, res) => {
//   const { todoId } = req.params;
//   const { order } = req.body;

//   const currentTodo = await Todo.findById(todoId);
//   if (!currentTodo) {
//     throw new Error("존재하지 않는 todo 데이터입니다.");
//   }

//   if (order) {
//     const targetTodo = await Todo.findOne({ order }).exec();
//     if (targetTodo) {
//       targetTodo.order = currentTodo.order;
//       await targetTodo.save();
//     }
//     currentTodo.order = order;
//   }

//   await currentTodo.save();

//   res.send({});
});
module.exports = router;

