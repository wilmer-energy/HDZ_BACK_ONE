const { body, validationResult } = require("express-validator");

// Utils
const { AppError } = require("../utils/appError.util");

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // [{ ..., msg }] -> [msg, msg, ...] -> 'msg. msg. msg. msg'
    const errorMessages = errors.array().map((err) => err.msg);

    const message = errorMessages.join(". ");

    return next(new AppError(message, 400));
  }

  next();
};

const createUserValidators = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name cannot be empty")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters"),
  body("lastName")
    .isString()
    .withMessage("lastName must be a string")
    .notEmpty()
    .withMessage("lastName cannot be empty")
    .isLength({ min: 3 })
    .withMessage("lastName must be at least 3 characters"),
  body("phone").notEmpty().withMessage("phone cannot be empty"),
  body("state")
    .isString()
    .withMessage("state must be a string")
    .notEmpty()
    .withMessage("state cannot be empty")
    .isLength({ min: 3 })
    .withMessage("state must be at least 3 characters"),
  body("service")
    .isString()
    .withMessage("service must be a string")
    .notEmpty()
    .withMessage("service cannot be empty")
    .isLength({ min: 3 })
    .withMessage("service must be at least 3 characters"),
  body("email").isEmail().withMessage("Must provide a valid email"),
  checkValidations,
];

module.exports = { createUserValidators };
