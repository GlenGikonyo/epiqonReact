// middleware/basicAuth.js
module.exports = function (req, res, next) {
  const authHeader = req.headers["authorization"] || "";
  const [type, credentials] = authHeader.split(" ");

  if (type !== "Basic") return res.status(401).send("Unauthorized");

  const [user, pass] = Buffer.from(credentials, "base64").toString().split(":");

  if (user === process.env.ADMIN_USER && pass === process.env.ADMIN_PASS) {
    return next();
  }
  res.status(401).send("Unauthorized");
};
