const Type = require('../models/type')

const controller ={
    getType: function(req, res){

        Type.find({}).exec()
        .then (TypeList=>{
            if(!TypeList)return res.status(404).send({message:"Data not found"})
            return res.status(200).json(TypeList)
        })
        .catch(err=> res.status(500).send({message:`Eror: ${err}`}))
    },

    //get two
    getTypes: function (req, res){
        let typeId = req.params.id
        if(typeId == null) return res.status(404).send({message : "No found"})

        Type.findById(typeId).exec()
        .then(data=>{
            if (!data) return res.status(404).send({ message: "Show not found" })
                return res.status(200).json(data)
        })
    .catch(err=>res.status(500).send({message: `Internal ERROR ${err}`}))
    },

    //save
    saveType: function (req, res) {
        let typs = new Type()
        const { name } = req.body
        if (name) {
            typs.name = name

            typs.save()
                .then(typeSave => {
                    typeSave
                        ? res.status(200).json({ typs: typeSave })
                        : res.status(404).send({ message: "Error saving the document" })
                })
                .catch(error => res.status(500).send({ message: "Error while saving the document" }))
        } else {
            return res.status(400).send({ message: "Data is not right" })
        }
    },

    //Update
    updateType: function (req, res) {
        let typeId = req.params.id
        let update = req.body
        Type.findByIdAndUpdate(typeId, update, { returnDocument: 'after' })
            .then(typeUpdate => {
                if (!typeUpdate) return res.status(404).send({ message: "The document does not exist" })
                return res.status(200).send({ type: typeUpdate })
            })
            .catch(error => res.status(500).send({ message: `Error while updating ${error}` }))
    },

    //DELETE
    deleteType: function (req, res) {
        let typeId = req.params.id

        Type.findByIdAndDelete(typeId)
            .then(rempveType => {
                if (!rempveType) return res.status(404).send({ message: "The show does not exist" })
                return res.status(200).send({ type: rempveType })
            })
            .catch(err => res.status(500).send({ message: "Error while deleting" }))
    }
}
module.exports=controller