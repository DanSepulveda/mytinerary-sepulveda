const joi = require('joi')

const validator = (req, res, next) => {
    { console.log('entro al validator') }
    const schema = joi.object({
        firstName: joi.string().trim().min(2).max(15).required().messages({
            "string.min": "Too short. Must have 2-15 characters.",
            "string.max": "To long. Must have 2-15 characters.",
        }),
        lastName: joi.string().trim().min(2).max(15).required().messages({
            "string.min": "Must have 2-15 characters.",
            "string.max": "Must have 2-15 characters.",
        }),
        email: joi.string().trim().email().required().messages({
            "string.email": "Must be a valid email."
        }),
        password: joi.string().trim().min(8).max(15).required().messages({
            "string.min": "Password must have 8-15 characters.",
            "string.max": "Password must have 8-15 characters."
        }),
        imageUrl: joi.string().trim().required().messages({
            "string.empty": "el campo no puede estar vacío"
        }),
        country: joi.string().trim().min(2).max(30).required().messages({
            "string.empty": "el campo no puede estar vacío"
        }),
    })

    const validation = schema.validate(req.body, { abortEarly: false })
    if (!validation.error) {
        next()
    } else {
        res.json({ success: false, errors: validation.error.details })
        console.log("envié la info al fron")
    }
}

module.exports = validator