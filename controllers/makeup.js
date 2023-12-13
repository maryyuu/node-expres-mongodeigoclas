const Makeup = require('../models/makeup')

const controller = {
    getMakeuplist: function (req, res) {

        Makeup.find({}).exec()
            .then(Makeuplist => {
                if (!Makeuplist) return res.status(404).send({ message: "Data not found" })
                return res.status(200).json(Makeuplist)
            })
            .catch(err => res.status(500).send({ message: `Error: ${err}` }))
    },

    //two get

    getMakeuplists: function (req, res) {
        let makeupId = req.params.id
        if (makeupId == null) return res.status(404).send({ message: "show not found" })
        Makeup.findById(makeupId).exec()
            .then(data => {
                if (!data) return res.status(404).send({ message: "Show not found" })
                return res.status(200).json(data)
            })
            .catch(err => res.status(500).send({ message: `Internal error-> ${err}` }))
    },

    //Save
    saveMakeuplist: function (req, res) { 
        let makeup = new Makeup()
        const { name, price, photo } = req.body
        if (name && price) {
            makeup.name = name
            makeup.price = price
            makeup.photo = photo

            makeup.save()
                .then(makeupSave => {
                    makeupSave
                        ? res.status(200).json({ makeup: makeupSave})
                        : res.status(404).send({ message: "Error saving the document" })
                })
                .catch(error => res.status(500).send({ message: "Error while saving the document" }))
        } else {
            return res.status(400).send({ message: "Data is not right" })
        }
    },

    //UPDATE
    updateMakeup: function (req, res) {
        let makeupId = req.params.id
        let update = req.body
        Makeup.findByIdAndUpdate(makeupId, update, { returnDocument: 'after' })
            .then(updateMakeup => {
                if (!updateMakeup) return res.status(404).send({ message: "The document does not exist" })
                return res.status(200).send({ makeup: updateMakeup })
            })
            .catch(error => res.status(500).send({ message: `Error while updating ${error}` }))
    },

    //DELETE
    // deleteMakeup: function (req, res) {
    //     let makeupId = req.params.id

    //     Makeup.findByIdAndRemove(makeupId)
    //         .then(removeMakeup => {
    //             if (!removeMakeup) return res.status(404).send({ message: "The show does not exist" })
    //             return res.status(200).send({ makeup: removeMakeup })
    //         })
    //         .catch(err => res.status(500).send({ message: "Error while deleting" }))
    // },
    deleteMakeup: function (req, res) {
        let makeupsId = req.params.id

        Makeup.findByIdAndDelete(makeupsId)
            .then(removedMakeup => {
                if (!removedMakeup) return res.status(404).send({ message: "The show does not exist" })
                return res.status(200).send({ makeup: removedMakeup })
            })
            .catch(err => res.status(500).send({ message: "Error while deleting" }))
    }
}
module.exports = controller