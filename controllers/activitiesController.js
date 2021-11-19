const Activity = require('../models/Activity')

const activityControllers = {
    addNewActivity: async (req, res) => {
        const { title, description, image, itineraryId } = req.body
        const activity = new Activity({
            title,
            description,
            image,
            itineraryId
        })
        try {
            activity.save()
            res.json({ success: true })
        } catch (e) {
            res.json({ success: false, error: e })
        }

    },
    getActivities: async (req, res) => {
        try {
            let activities = await Activity.find({ itineraryId: req.params.id });
            res.json({ success: true, response: activities });
        } catch {
            res.json({ success: false });
        }
    }
}

module.exports = activityControllers