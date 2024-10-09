import { API_KEY } from "./../config.js";
import { sign } from "./../lib/sign.js";

/**
 * Validates the request signature
 * @param {import('express').Request} req request object
 * @param {import('express').Response} res response object
 * @param {import('express').NextFunction} next next function
 * @see https://expressjs.com/en/guide/using-middleware.html
 */
export const validateSignature = (req, res, next) => {
  if (!req?.body?.sql) {
    return res.status(400).json({ error: "'sql' body param is required" });
  }

  const signature = req.headers["signature"];
  if (!signature) return res.sendStatus(401);

  if (sign(req.body.sql, API_KEY) !== signature) {
    return res.sendStatus(403);
  }

  next();
};
