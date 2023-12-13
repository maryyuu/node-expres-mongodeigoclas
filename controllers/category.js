const category = require('../models/category')
let Category = require('../models/category')
const { param } = require('../routers/makeup')

const controller = {
    getCategory: function (req, res) { 
        Category.find({}).exec()
            .then(CategoryList => { 
                if (!CategoryList) return res.status(404).send({ message: "No data Found" })
                return res.status(200).json(CategoryList)
            })
            .catch(err => res.status(500).send({message:`Error: ${err}`}))
    },

    //get two
    getCategorys: function(req, res){
        let categoryId = req.params.id
        if(categoryId== null) return res.status(404).send({message:"No found"})

        Category.findById(categoryId).exec()
        .then(data=>{
            if(!data) return res.status(200).json(data)
        })
        .catch(err=> res.status(500).send({message:`Intern ERROR ${err}`}))
    }
}
module.exports = controller