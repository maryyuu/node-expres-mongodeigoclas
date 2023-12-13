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
            if(!data) return res.status(200).json(data)
        })
    .catch(err=>res.status(500).send({message: `Internal ERROR ${err}`}))
    }

}
module.exports=controller