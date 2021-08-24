const User = require('../models/User')
const bcryptjs = require('bcryptjs')

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
                res.json({ success: true })
            } else {
                throw new Error("User already exists")
            }
        } catch {
            res.json({ success: false })
        }
    },
    getOneUser: async (req, res) => {
        const { email, password } = req.body
        try {
            let chosen = await User.findOne({ email: email })
            if (!chosen) throw new Error()
            let passMatch = bcryptjs.compareSync(password, chosen.password)
            if (!passMatch) throw new Error()
            res.json({ success: true })
        } catch {
            res.json({ success: false })
        }
    }
}

module.exports = userControllers