
let Category = require('../models/category')

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
            if (!data) return res.status(404).send({ message: "Show not found" })
                return res.status(200).json(data)
        })
        .catch(err=> res.status(500).send({message:`Intern ERROR ${err}`}))
    },

    //Save
    
    saveCategory: function (req, res) {
        let categorys= new Category()
        const { name } = req.body
        if (name) {
            categorys.name = name

            categorys.save()
                .then(categorySave => {
                    categorySave
                        ? res.status(200).json({ categorys: categorySave })
                        : res.status(404).send({ message: "Error saving the document" })
                })
                .catch(error => res.status(500).send({ message: "Error while saving the document" }))
        } else {
            return res.status(400).send({ message: "Data is not right" })
        }
    },

    //UPDATE
    updateCategory: function (req, res) {
        let categoryId = req.params.id
        let update = req.body
        Category.findByIdAndUpdate(categoryId, update, { returnDocument: 'after' })
            .then(updateCategory => {
                if (!updateCategory) return res.status(404).send({ message: "The document does not exist" })
                return res.status(200).send({ category: updateCategory })
            })
            .catch(error => res.status(500).send({ message: `Error while updating ${error}` }))
    },

    //DELETE
    deleteCategory: function (req, res) {
        let categoryid = req.params.id

        Category.findByIdAndDelete(categoryid)
            .then(removeCategory => {
                if (!removeCategory) return res.status(404).send({ message: "The show does not exist" })
                return res.status(200).send({ category: removeCategory })
            })
            .catch(err => res.status(500).send({ message: "Error while deleting" }))
    }
}
module.exports = controller