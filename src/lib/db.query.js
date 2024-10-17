import { Sequelize } from "sequelize";
import {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_DRIVER,
} from "../config.js";
import { logger } from "./logger.js";

/**
 * @typedef {Object} Success
 * @property {any[]} data
 * @property {undefined} error
 *
 * @typedef {Object} Failed
 * @property {undefined} data
 * @property {string} error
 */

/**
 * Query the database
 * @param {String} sql
 * @returns {Promise<Success|Failed>}
 */
export async function query(sql) {
  const sequelize = new Sequelize(
    DATABASE_NAME,
    DATABASE_USER,
    DATABASE_PASSWORD,
    {
      host: DATABASE_HOST,
      port: DATABASE_PORT,
      dialect: DATABASE_DRIVER,
      dialectOptions: {
        requestTimeout: 120 * 1000,
        connectTimeout: 10 * 1000,
      },
      logging: (sql) => {
        logger.info(sql);
      },
    }
  );

  try {
    const result = await sequelize.query(sql);
    await sequelize.close();
    return { error: undefined, data: result[0] };
  } catch (e) {
    return { error: e.message, data: undefined };
  }
}
