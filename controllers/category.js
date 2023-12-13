let Category = require('../models/category')
const controller = {
    getCategory: function (res, req) { 
        Category.find({}).exec()
            .then(categoryList => { 
                if (!categoryList) return res.status(404).send({ message: "No data Found" })
                return res.status(200).json(categoryList)
            })
            .catch(err => res.status(500).send({message:`Error: ${err}`}))
    }
}
module.exports = controller