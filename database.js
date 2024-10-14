import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

// get a user by id
export async function getUserByID(id) {
  const [rows] = await pool.query(
    `
  SELECT *
  FROM user
  WHERE id = ?
  `,
    [id]
  );
  return rows[0];
}

// get a user by email & password
export async function getUserByEmail(email, password) {
  const [rows] = await pool.query(
    `
  SELECT *
  FROM user
  WHERE email = ? AND password = ?
  `,
    [email, password]
  );
  return rows[0];
}

// create user
export async function createUser(name, email, phone, password) {
  const [result] = await pool.query(
    `
  INSERT INTO user (name, email, phone, password)
  VALUES (?, ?, ?, ?)
  `,
    [name, email, phone, password]
  );
  const id = result.insertId;
  return getUser(id);
}

// create todo
export async function createTodo(todo, user_id) {
  const [result] = await pool.query(
    `
  INSERT INTO to_do (user_id, body, is_checked)
  VALUES (?, ?, ?)
  `,
    [user_id, todo, false]
  );
  return true;
}

// get all todo
export async function getAllTodo(user_id) {
  const [rows] = await pool.query(
    `
  SELECT *
  FROM to_do
  WHERE user_id = ?
  `,
    [user_id]
  );
  return rows;
}

// todo checked
export async function todoChecked(todo_id) {
  const result = await pool.query(
    `
    UPDATE to_do
    SET is_checked = NOT is_checked
    WHERE id = ?
  `,
    [todo_id]
  );
  return true;
}

// todo delete
export async function todoDelete(todo_id) {
  const result = await pool.query(
    `
    DELETE
    FROM to_do
    WHERE id = ?
  `,
    [todo_id]
  );
  return true;
}
