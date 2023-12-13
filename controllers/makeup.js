let Makeup = require('../models/makeup')

const controller = {
    getMakeuplist: function (req, res) {

        Makeup.find({}).exec()
            .then(Makeuplist => {
                if (!Makeuplist) return res.status(404).send({ message: "Data not found" })
                return res.status(200).json(Makeuplist)
            })
            .catch(err => res.status(500).send({ message: `Error: ${err}` }))
    },

    //   getShows: function (req, res) {
    //     Show.find({}).exec()
    //         .then(showsList => {
    //             if (!showsList) return res.status(404).send({ message: "No data found" })
    //             return res.status(200).json(showsList)
    //         })
    //         .catch(err => res.status(500).send({ message: `Error: ${err}` }))
    // },
}
module.exports = controller