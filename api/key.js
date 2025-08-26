export default function handler(req, res) {
  res.status(200).json({ key: "YOUR_SECRET_KEY" });
}
