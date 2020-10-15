import express from "express";

import "./database/connection";

const app = express();

app.use(express.json());

/* SUMMARY */
// Route = The whole code block
// Resource = user

// HTTP Methods = GET, POST, PUT, DELETE
// Params

/* DETAIL */
// GET = Search for information (list, item)
// POST = Create information
// PUT = Editing information
// DELETE = Delete information

// Query Params: http://localhost:333/user?search=walisson (To filter data. Ex: ?param=value&city=sydney)
//console.log(request.query);

// Route Params: http://localhost:333/users/1 (Identify a resource - PUT & DELETE)
// console.log(request.params);

// Body: http://localhost:333/users (Data - Ex: user data (first nam, surname, phone, email, address, etc))
// console.log(request.body);

app.get("/users", (request, response) => {
  return response.json({ message: "Hello World" });
});

// localhost:3333
app.listen(3333);
