const successResponse = (res, message, data, statusCode = 200) => {
  return res.status(statusCode).json({
    message,
    data,
  });
};

module.exports = {
  successResponse,
};
