const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
require("dotenv").config();

const userControllers = {
    addNewUser: async (req, res) => {

        const { firstName, lastName, email, password, imageUrl, country } = req.body
        let hashedPass = bcryptjs.hashSync(password, 10)
        const user = new User({
            firstName, lastName, email, password: hashedPass, imageUrl, country
        })
        try {
            let chosenUser = await User.findOne({ email: email })
            if (!chosenUser) {
                await user.save()
                const token = jwt.sign({ ...user }, process.env.SECRETKEY)
                const { firstName, imageUrl } = user
                res.json({ success: true, response: { firstName, imageUrl, token } })
            } else {
                throw new Error("User already exists")
            }
        } catch (e) {
            res.json({ success: false, error: e.message })
        }
    },
    verifyAccess: async (req, res) => {
        const { email, password } = req.body
        try {
            let chosen = await User.findOne({ email: email })
            if (!chosen) throw new Error("Email and/or password are incorrect.")
            let passMatch = bcryptjs.compareSync(password, chosen.password)
            if (!passMatch) throw new Error("Email and/or password are incorrect.")
            const token = jwt.sign({ ...chosen }, process.env.SECRETKEY)
            const { firstName, imageUrl } = chosen
            res.json({ success: true, response: { firstName, imageUrl, token } })
        } catch (e) {
            res.json({ success: false, error: e.message })
        }
    }
}

module.exports = userControllers