export default function handler(req, res) {
  function generateKey(length = 16) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";
    for (let i = 0; i < length; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return key;
  }

  const randomKey = generateKey(32); // key dài 32 ký tự
  res.status(200).send(generateKey(32)); // hiện trực tiếp key random
}
