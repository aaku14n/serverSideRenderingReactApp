import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./src/App";
import Html from "./src/Html";
const port = 3000;
const server = express();
server.use('/assets', express.static('assets'));
server.get("/", (req, res) => {
  const body = renderToString(<App />);
  const title = "Server file";
  res.send(
    Html({
      body,
      title
    })
  );
});
server.listen(port);
console.log(`Server has been started on http://localhost:3000:${port}`);
