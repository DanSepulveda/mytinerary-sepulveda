const joi = require('joi')

const validator = (req, res, next) => {
    { console.log('entro al validator') }
    const schema = joi.object({
        firstName: joi.string().trim().min(2).max(15).required().messages({
            "string.min": "First Name must have 2 characters at least.",
            "string.max": "It seems you have a long name. Try a shorter one.",

        }),
        lastName: joi.string().trim().min(2).max(30).required().messages({
            "string.empty": "el campo no puede estar vacío"
        }),
        email: joi.string().trim().min(2).max(30).required().messages({
            "string.empty": "el campo no puede estar vacío"
        }),
        password: joi.string().trim().min(2).max(30).required().messages({
            "string.empty": "el campo no puede estar vacío"
        }),
        imageUrl: joi.string().trim().min(2).max(30).required().messages({
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