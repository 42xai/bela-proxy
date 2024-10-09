/**
 * Throws an error if the environment variable is not set.
 * @param {string} variable name of the environment variable
 */
const throwError = (variable) => {
  throw new Error(`env var "${variable}" is not set`);
};

export const PORT = Number(process.env.PORT) || 7000;

export const API_KEY = process.env.API_KEY || throwError("API_KEY");

export const DATABASE_HOST =
  process.env.DATABASE_HOST || throwError("DATABASE_HOST");

export const DATABASE_PORT =
  process.env.DATABASE_PORT || throwError("DATABASE_PORT");

export const DATABASE_USER =
  process.env.DATABASE_USER || throwError("DATABASE_USER");

export const DATABASE_PASSWORD =
  process.env.DATABASE_PASSWORD || throwError("DATABASE_PASSWORD");

export const DATABASE_NAME =
  process.env.DATABASE_NAME || throwError("DATABASE_NAME");

export const DATABASE_DRIVER =
  process.env.DATABASE_DRIVER || throwError("DATABASE_DRIVER");

export const TLS_KEY_PATH = process.env.TLS_KEY_PATH;
export const TLS_CERT_PATH = process.env.TLS_CERT_PATH;
