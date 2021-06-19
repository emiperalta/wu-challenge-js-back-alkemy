const validateImage = img => {
  if (img.match(/.(jpeg|jpg|gif|png)$/) === null) {
    return false;
  }
  return true;
};

module.exports = { validateImage };
