exports.logout = (req, res) => {
  res
    .cookie("token", null, { maxAge: 0, httpOnly: true })
    .json({ status: "sucess" });
};
