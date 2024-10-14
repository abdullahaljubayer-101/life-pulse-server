import express from "express";
import {
  getUserByID,
  getUserByEmail,
  createUser,
  createTodo,
  getAllTodo,
  todoChecked,
  todoDelete,
} from "./database.js";

const app = express();
app.use(express.json());

// get a user by id
app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const user = await getUserByID(id);
  if (user) res.send(user);
  else res.status(400).send({ msg: "No user" });
});

// get a user by email & password
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email, password);
  if (user) res.send(user);
  else res.status(400).send({ msg: "Email or Password wrong!" });
});

// create user
app.post("/user", async (req, res) => {
  const { name, email, phone, password } = req.body;
  const user = await createUser(name, email, phone, password);
  res.status(201).send(user);
});

// create todo
app.post("/todo", async (req, res) => {
  const { todo, user_id } = req.body;
  await createTodo(todo, user_id);
  res.send({ msg: "OK" });
});

// get all todo
app.get("/todo/:user_id", async (req, res) => {
  const user_id = req.params.user_id;
  const todo = await getAllTodo(user_id);
  if (todo) res.send(todo);
  else res.status(400).send({ msg: "No todo" });
});

// todo checked
app.get("/todoChecked/:todo_id", async (req, res) => {
  const todo_id = req.params.todo_id;
  await todoChecked(todo_id);
  res.send({ msg: "OK" });
});

// todo delete
app.get("/todoDelete/:todo_id", async (req, res) => {
  const todo_id = req.params.todo_id;
  await todoDelete(todo_id);
  res.send({ msg: "OK" });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
