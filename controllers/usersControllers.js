const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
require("dotenv").config();

const userControllers = {
    addNewUser: async (req, res) => {
        console.log("llego al controlador")
        const { firstName, lastName, email, password, imageUrl, country, google, admin } = req.body
        let hashedPass = bcryptjs.hashSync(password, 10)
        const user = new User({
            firstName, lastName, email, password: hashedPass, imageUrl, country, google, admin
        })
        try {
            let chosenUser = await User.findOne({ email: email })
            if (!chosenUser) {
                console.log("entro al if")
                await user.save()
                const token = jwt.sign({ ...user }, process.env.SECRETKEY)
                const { firstName, imageUrl } = user
                res.json({ success: true, response: { firstName, imageUrl, token } })
            } else {
                console.log("entro al else")
                throw new Error("User already exists")
            }
        } catch (e) {
            res.json({ success: false, error: e.message })
        }
    },
    verifyAccess: async (req, res) => {
        const { email, password, flagGoogle } = req.body
        try {
            let chosen = await User.findOne({ email: email })
            if (!chosen) throw new Error("Email and/or password are incorrect.")
            if (chosen.google && !flagGoogle) throw new Error("You must log in with Google")
            let passMatch = bcryptjs.compareSync(password, chosen.password)
            if (!passMatch) throw new Error("Email and/or password are incorrect.")
            const token = jwt.sign({ ...chosen }, process.env.SECRETKEY)
            const { firstName, imageUrl } = chosen
            res.json({ success: true, response: { firstName, imageUrl, token } })
        } catch (e) {
            res.json({ success: false, error: e.message })
        }
    },
    verifyToken: (req, res) => {
        console.log('llego acá')
        console.log(req.user)
        res.json({ success: true, response: { firstName: req.user.firstName, imageUrl: req.user.imageUrl } })
    }
}

module.exports = userControllers