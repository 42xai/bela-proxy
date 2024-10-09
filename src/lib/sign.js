import { createHmac } from "crypto";

/**
 * Signs a payload with the a private key
 * @param {String} payload
 * @param {String} privateKey
 * @returns {String} signature
 */
export function sign(payload, privateKey) {
  const hmac = createHmac("sha256", privateKey);
  hmac.update(payload);
  return hmac.digest("hex");
}
