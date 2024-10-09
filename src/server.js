import "dotenv/config.js";
import express from "express";
import https from "https";
import fs from "fs";
import { PORT, TLS_KEY_PATH, TLS_CERT_PATH } from "./config.js";
import { validateSignature } from "./middleware/auth.js";
import { query } from "./lib/db.query.js";

// Define a new Express application
const app = express();

// Middleware
app.use(express.json());

/**
 * Handles the GET request for the root route.
 * @param {express.Request} req request object
 * @param {express.Response} res response object
 */
app.get("/", (req, res) => {
  res.sendStatus(200);
});

/**
 * Handles SQL queries submitted by BELA.
 * @param {express.Request} req request object
 * @param {express.Response} res response object
 */
app.post("/query", validateSignature, async (req, res) => {
  const { data, error } = await query(req.body.sql);
  if (error) {
    return res.status(400).json({ error });
  }
  res.status(200).json(data);
});

/**
 * Starts the server.
 * @returns {void}
 */
const startServer = () => {
  const startMessage = `Server is running on port ${PORT}`;
  if (TLS_KEY_PATH && TLS_CERT_PATH) {
    const options = {
      key: fs.readFileSync(TLS_KEY_PATH),
      cert: fs.readFileSync(TLS_CERT_PATH),
    };
    https.createServer(options, app).listen(PORT, () => {
      console.log(startMessage);
    });
  } else {
    app.listen(PORT, () => {
      console.log(startMessage);
    });
  }
};

startServer();
