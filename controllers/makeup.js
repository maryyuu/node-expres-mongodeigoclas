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

    //two get
    getMakeuplists: function (req, res){
        let makeupId = req.params.id
        if(makeupId == null) return res.status(404).send({message:"Makeup List nof Found"})

        Makeup.findById(makeupId).exec()
        .then(data=>{
            if(!data) return res.status(200).json(data)
        })
    .catch(err => res.status(500).send({message:`Internal ERROR${err}`}))
    }
}
module.exports = controller