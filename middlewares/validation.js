const { validDetails } = require("../utils/validDetails");

const validation = async (req, res, next) => {
    const [isValid, errors] = validDetails(req.body); // checking whether all fields are provided and valid

    if (!isValid) {
        return res.status(400).json(errors);
    }
    next();
}

module.exports = { validation }