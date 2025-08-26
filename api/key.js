export default function handler(req, res) {
  // Hàm tạo key random
  function generateKey(length = 16) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";
    for (let i = 0; i < length; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return key;
  }

  const randomKey = generateKey(32); // random key dài 32 ký tự
  res.status(200).json({ key: randomKey });
}
